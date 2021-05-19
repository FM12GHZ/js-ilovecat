const API_ENDPOINT =
    "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

async function request(url) {
    const res = await fetch(url);
    return res.json();
}

const api = {
    fetchCats: async (keyword) => {
        return await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    },
};


export default api;
