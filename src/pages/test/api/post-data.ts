import { EnvConfig } from "@/utils/env.config";

const DEFAULT_TIMEOUT = 150; // ms

const { api } = EnvConfig();
export async function sendFormData<T = any>(
  endpoint: string,
  formData: FormData,
  timeout: number = DEFAULT_TIMEOUT
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${api}${endpoint}`, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const contentType = response.headers.get("content-type");
    return contentType?.includes("application/json")
      ? response.json()
      : (response.text() as T);
  } catch (error) {
    clearTimeout(timeoutId);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to submit form data: ${errorMessage}`);
  }
}
