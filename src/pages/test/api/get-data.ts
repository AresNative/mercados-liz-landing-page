import { EnvConfig } from "@/utils/env.config";

interface Filter {
  key: string;
  value: string;
  operator: string;
}

interface CombosRequest {
  filtros: Filter[];
  page: number;
}

const { api } = EnvConfig();

export async function fetchDynamicData<T = unknown>(
  filter: CombosRequest,
  endpoint: string
): Promise<{ data: T[]; totalPages: number }> {
  // Cambio en el tipo de retorno
  //const controller = new AbortController();

  try {
    const response = await fetch(`${api}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
      //signal: controller.signal,
    });

    if (!response.ok) {
      const errorData = await parseErrorResponse(response);
      throw new Error(
        `Request failed: ${response.status} - ${response.statusText}` +
          (errorData ? `\nDetails: ${JSON.stringify(errorData)}` : "")
      );
    }

    const result = await response.json();
    return {
      data: result.data || [],
      totalPages: result.totalPages || 0, // Añadimos totalPages
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    console.error(`Error fetching data from ${endpoint}:`, error);
    throw new Error(`Failed to load data: ${errorMessage}`);
  }
}

async function parseErrorResponse(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    try {
      return await response.text();
    } catch {
      return null;
    }
  }
}
