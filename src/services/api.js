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

const normalizeSubSlug = (subSlug) => {
    const map = { "hair care": "haircare", "hairbare": "haircare", "men's grooming": "mensgrooming","bath & body": "bathbody", "dining&entertaining": "dining" }
    return map[subSlug.toLowerCase()] || subSlug.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() }

export async function fetchProductsBySlug(mainSlug, subSlug = null) {
    const slugMap = {
        women: { clothing: "womenClothing", shoes: "womenShoes", bags: "womenBags", accessories: "womenAccessories", shirts: "womenShirts"},
        men: { clothing: "menClothing", shoes: "menShoes", bags: "menBags", accessories: "menAccessories", watches: "menWatches" },
        kids: { nurserybaby: "nurseryBaby", babygirls03years: "babyGirls", babyboys03years: "babyBoys", girls316years: "girls", boys316years: "boys" },
        jewellery: {rings: "jewelleryRings",bracelet: "jewelleryBracelets",necklaces: "jewelleryNecklaces",earrings: "jewelleryEarrings",watches: "jewelleryWatches"},
        beauty: {skincare: "beautySkincare",makeup: "beautyMakeup",haircare: "beautyHairCare",fragrance: "beautyFragrance",bathbody: "beautyBathBody",mensgrooming: "beautyMens"},
        home: {bath: "homeBath",bedroom: "homeBedroom",dining: "homeDining"}
    };

    let apiSlug;
    
    if (subSlug) {
        const normalizedSubSlug = normalizeSubSlug(subSlug);
        apiSlug = slugMap[mainSlug]?.[normalizedSubSlug];
    } else {
        apiSlug = slugMap[mainSlug]?.clothing;
    }

    if (!apiSlug) {
        console.error("Unknown slug combination:", mainSlug, subSlug);
        return [];
    }

    try {
        const res = await axios.get(`https://stanley-data.vercel.app/${apiSlug}`);
        return res.data;
    } catch (err) {
        console.error("Error fetching products:", err);
        return [];
    }
}

