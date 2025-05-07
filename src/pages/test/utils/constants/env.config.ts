// config.ts
type EnvConfigType = {
  api: string;
  mode: string;
  itemsPerPage: number;
};

export const EnvConfig = (): EnvConfigType => {
  const mode = process.env.REACT_PUBLIC_MODE || "development";
  const api =
    mode === "production"
      ? process.env.REACT_APP_API_URL_DEV ||
        "https://mercadosmejia.intelisiscloud.com:4206/api/"
      : process.env.REACT_TEST_API_URL || "http://localhost:5000/api/";

  const itemsPerPage = parseInt(process.env.ITEMS_PER_PAGE || "10", 10); // Fallback a 10 si no está definido

  return {
    api,
    mode,
    itemsPerPage,
  };
};
