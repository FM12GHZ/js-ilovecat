const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

export let isLoading = true;

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw Error("http 호출중 무엇인가 잘못되었음.");
    }
    const result = await res.json();
    return result;
  } catch (e) {
    alert(e.message);
  } finally {
    isLoading = false;
    console.log("됐다!");
  }
};

export const fetchCats = async (keyword) => {
  return await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
};

export const fetchRandomCats = async () => {
  return await request(`${API_ENDPOINT}/api/cats/random50`);
};

export const fetchCatDetail = async (id) => {
  return await request(`${API_ENDPOINT}/api/cats/${id}`);
};
