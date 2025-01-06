// Categories and Products Data
const productData = {
    categories: [
        {
            id: 1,
            name: "Diffusers",
            subcategories: [
                { id: 11, name: "Aroma diffusers" },
                { id: 12, name: "Aerosol dispenser" },
            ],
        },
        {
            id: 2,
            name: "Essential Perfume Oils",
            subcategories: [
                { id: 21, name: "Standard fragrance" },
                { id: 22, name: "Premium fragrance" },
            ],
        },
        {
            id: 3,
            name: "Airfreshener Refills",
            subcategories: [
                { id: 31, name: "250 ml air freshener" },
                { id: 32, name: "300 ml air fresheners" },
                { id: 33, name: "100 ml air fresheners" },
            ],
        },
        {
            id: 4,
            name: "Cleaning Products",
            subcategories: [
                { id: 35, name: "250 ml air freshener" },
                { id: 36, name: "300 ml air fresheners" },
                { id: 37, name: "100 ml air fresheners" },
                { id: 38, },
                { id: 39, },
            ],
        },
    ],
    products: [
        {
            id: 1,
            name: "AEROSOL SPRAY – FOR YOU",
            category: 11,
            mainCategory: 3,
            price: 79,
            image: "imager/imagesaltr/shop1-Photoroom.png",
            isNew: true,
        },
        {
            id: 2,
            name: "Smart Scent Diffuser – Small -Bluetooth (White)",
            category: 12,
            mainCategory: 1,
            price: 89,
            image: "imager/imagesaltr/shop2-Photoroom.png",
            isSale: true,
        },
        {
            id: 3,
            name: "Aroma oil Sense 500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 4,
            name: "Smart Scent Diffuser – Small -Bluetooth (White)",
            category: 22,
            mainCategory: 1,
            price: 65,
            image: "imager/imagesaltr/shop7-Photoroom.png",
            isNew: true,
        },
        {
            id: 5,
            name: "Smart Scent Diffuser – Small -Bluetooth (Black)",
            category: 31,
            mainCategory: 1,
            price: 35,
            image: "imager/imagesaltr/shop8-Photoroom.png",
        },
       
        {
            id: 6,
            name: "Aroma Diffuser Machine – Medium (Black)",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop9-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "Aroma PED Diffuser Machine -Small",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop4.jpg",
            isSale: true,
        },
        {
            id: 8,
            name: "Aroma Diffuser Machine – Medium (Black)",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop12-Photoroom.png",
            isSale: true,
        },
        {
            id: 9,
            name: "Aroma Diffuser Machine – Medium (White)",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop10-Photoroom.png",
            isSale: true,
        },
        {
            id: 10,
            name: "Premium Diffuser Machine Bluetooth – Big – Orange",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop19-Photoroom.png",
            isSale: true,
        },
        {
            id: 11,
            name: "Premium Diffuser Machine Bluetooth – Big – Red",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop20-Photoroom.png",
            isSale: true,
        },
       
        {
            id: 12,
            name: "AEROSOL SPRAY – MOON",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop25-Photoroom.png",
            isSale: true,
        },
        {
            id: 13,
            name: "AEROSOL SPRAY – OUDY",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop26-Photoroom.png",
            isSale: true,
        },
        {
            id: 14,
            name: "AEROSOL SPRAY – LEMON",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop27-Photoroom.png",
            isSale: true,
        },
        {
            id: 15,
            name: "AEROSOL SPRAY – PAPAYA",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop28-Photoroom.png",
            isSale: true,
        },
        {
            id: 16,
            name: "AEROSOL SPRAY – EVENT",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop29-Photoroom.png",
            isSale: true,
        },
        {
            id: 17,
            name: "AEROSOL SPRAY – LOVER",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop30-Photoroom.png",
            isSale: true,
        },
        {
            id: 18,
            name: "AEROSOL SPRAY – SENSE",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop31-Photoroom.png",
            isSale: true,
        },
        {
            id: 19,
            name: "AEROSOL SPRAY – GOLD",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop32-Photoroom.png",
            isSale: true,
        },
        {
            id: 20,
            name: "AEROSOL SPRAY – LAVENDER",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop33-Photoroom.png",
            isSale: true,
        },
        {
            id: 21,
            name: "AEROSOL SPRAY – JASMINE",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop34-Photoroom.png",
            isSale: true,
        },
        {
            id: 22,
            name: "Aroma Diffuser Machine – Medium (Black)",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop35.png",
            isSale: true,
        },
        {
            id: 23,
            name: "Round Tissue Dispenser",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop38.jpg",
            isSale: true,
        },
        {
            id: 24,
            name: "Aroma Diffuser Machine- Bluetooth- Small (White)",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop14.jpg",
            isSale: true,
        },
        {
            id: 24,
            name: "Premium Diffuser Machine Bluetooth",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop16.jpg",
            isSale: true,
        },
        {
            id: 25,
            name: "Flat Tissue Dispenser",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop37.jpg",
            isSale: true,
        },
        {
            id: 26,
            name: "Premium Diffuser Machine Bluetooth",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop18.jpg",
            isSale: true,
        },
        {
            id: 27,
            name: "Cut Tissue Dispenser",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop39.jpg",
            isSale: true,
        },
        {
            id: 28,
            name: "Maxi Roll Dispenser",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop40.jpg",
            isSale: true,
        },
        {
            id: 29,
            name: "Hand Soap Dispenser",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop41.jpg",
            isSale: true,
        },
        {
            id: 30,
            name: "Maxi Roll Tissue",
            category: 32,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop42.jpg",
            isSale: true,
        },
        {
            id: 31,
            name: "V Fold Tissue",
            category: 32,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop43.jpg",
            isSale: true,
        },
        {
            id: 32,
            name: "Toilet Roll Tissue",
            category: 32,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop44.jpg",
            isSale: true,
        },
        {
            id: 33,
            name: "Facial Tissue",
            category: 32,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop45.jpg",
            isSale: true,
        },
        {
            id: 34,
            name: "Dust Bin",
            category: 32,
            mainCategory: 1,
            price: 42,
            image: "imager/imagesaltr/shop46.jpg",
            isSale: true,
        },
        {
            id: 35,
            name: "Disinfectant Cleaner Lavender",
            category: 50,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop47-Photoroom.png",
            isSale: true,
        },
        {
            id: 36,
            name: "All Purpose Disinfectant Cleaner",
            category: 51,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop48-Photoroom.png",
            isSale: true,
        },
        {
            id: 37,
            name: "All Purpose Cleaner",
            category: 52,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop49-Photoroom.png",
            isSale: true,
        },
        {
            id: 38,
            name: "Chemex Bleach",
            category: 53,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop50-Photoroom.png",
            isSale: true,
        },
        {
            id: 39,
            name: "Pine Disinfectant",
            category: 54,
            mainCategory: 4,
            price: 42,
            image: "imager/imagesaltr/shop51-Photoroom.png",
            isSale: true,
        },
        {
            id: 40,
            name: "Aroma oil Crystal  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 41,
            name: "Aroma oil Address  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 42,
            name: "Aroma oil Magic  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 43,
            name: "Aroma oil Event  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 44,
            name: "Aroma oil Gentle  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 45,
            name: "Aroma oil Flora  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 46,
            name: "Aroma oil Jasmine  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 47,
            name: "Aroma oil Citrus Oasis 500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 48,
            name: "Aroma oil Secret  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 49,
            name: "Aroma oil Lemon grass  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 50,
            name: "Aroma oil Lavender   500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 51,
            name: "Aroma oil Passion   500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 52,
            name: "Aroma oil Harmony  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 53,
            name: "Aroma oil Royal  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 54,
            name: "Aroma oil Amber  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 55,
            name: "Aroma oil Gold   500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 56,
            name: "Aroma oil Persian Oud  500ml",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
    ],
};

// Function to generate category filters
function generateCategoryFilters() {
    const filterContainer = document.getElementById("category-filters");
    let filterHTML = `
        <li class="nav-item">
            <a class="nav-link active" href="#" data-category="all">All Products</a>
        </li>`;

    productData.categories.forEach((category) => {
        filterHTML += `
            <li class="nav-item">
                <a class="nav-link" href="#" data-category="${category.id}">${category.name}</a>
            </li>`;
    });

    filterContainer.innerHTML = filterHTML;
}

// Function to filter and display products
function filterProducts(selectedValue) {
    const productContainer = document.querySelector(".row.product");
    let filteredProducts = [];

    if (selectedValue === "all") {
        filteredProducts = productData.products;
    } else {
        const categoryId = parseInt(selectedValue);
        filteredProducts = productData.products.filter(
            (product) => product.mainCategory === categoryId
        );
    }

    let productsHTML = "";
    filteredProducts.forEach((product) => {
        productsHTML += `
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-img-top">
                        <a href="" class="">
                            <img class="image-cover" src="${
                                product.image
                            }" alt="${product.name}">
                        </a>
                        ${product.isNew ? '<p class="onnew">New</p>' : ""}
                        ${product.isSale ? '<p class="onsale">Sale</p>' : ""}
                        <div class="icon-product">
                            <button class="btn">
                                <span class="lnr lnr-lock"></span>
                            </button>
                            <button type="button" class="btn click-quick-view" data-toggle="modal" data-target="#exampleModalCenter">
                                <span class="lnr lnr-magnifier"></span>
                            </button>
                            <button class="btn">
                                <span class="lnr lnr-heart"></span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                      
                        <p class="woocommerce-loop-product__title">
                            <h6>${product.name}</h6>
                        </p>
                       
                    </div>
                </div>
            </div>`;
    });

    productContainer.innerHTML = productsHTML;
}

// Helper function to get subcategory name
function getSubcategoryName(categoryId) {
    for (const category of productData.categories) {
        const subcategory = category.subcategories.find(
            (sub) => sub.id === categoryId
        );
        if (subcategory) return subcategory.name;
    }
    return "";
}

// Function to handle category click
function handleCategoryClick(e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll(".category-nav .nav-link").forEach((link) => {
        link.classList.remove("active");
    });

    // Add active class to clicked link
    e.target.classList.add("active");

    // Filter products
    const selectedCategory = e.target.getAttribute("data-category");
    filterProducts(selectedCategory);
}

// Initialize when document is ready
document.addEventListener("DOMContentLoaded", function () {
    generateCategoryFilters();

    // Add click event listeners to category links
    document.querySelectorAll(".category-nav .nav-link").forEach((link) => {
        link.addEventListener("click", handleCategoryClick);
    });

    // Initial product display (show all products)
    filterProducts("all");
});
