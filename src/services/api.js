import axios from "axios";

const BASE_URL = "https://ecommerce.ibradev.me";

export async function fetchCategories() {
    const res = await axios.get(`${BASE_URL}/categories/all`);
    return res.data;
}

export async function fetchProducts() {
    const res = await axios.get(`${BASE_URL}/products/all`);
    return res.data.data;
}

export async function fetchBrands() {
    const res = await axios.get(`${BASE_URL}/brands/all`);
    return res.data;
}

export async function fetchProductById(id) {
    const res = await axios.get(`${BASE_URL}/products/get/${id}`);
    return res.data;
}