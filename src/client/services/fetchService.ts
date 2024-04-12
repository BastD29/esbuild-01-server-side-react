const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
};
