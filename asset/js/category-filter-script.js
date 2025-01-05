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
    ],
    products: [
        {
            id: 1,
            name: "Aroma Diffuser Plus",
            category: 11,
            mainCategory: 1,
            price: 79,
            image: "imager/product/product.jpg",
            isNew: true,
        },
        {
            id: 2,
            name: "Aerosol Premium",
            category: 12,
            mainCategory: 1,
            price: 89,
            image: "imager/product/product2.jpg",
            isSale: true,
        },
        {
            id: 3,
            name: "Standard Fragrance Oil",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/product/product3.jpg",
        },
        {
            id: 4,
            name: "Premium Fragrance Oil",
            category: 22,
            mainCategory: 2,
            price: 65,
            image: "imager/product/product4.jpg",
            isNew: true,
        },
        {
            id: 5,
            name: "250ml Fresh Air",
            category: 31,
            mainCategory: 3,
            price: 35,
            image: "imager/product/product5.jpg",
        },
        {
            id: 6,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/product/product6.jpg",
            isSale: true,
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
                        <a href="product-single.html" class="wp-post-image">
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
                        <p class="card-title">
                            <a href="product-list.html">${getSubcategoryName(
                                product.category
                            )}</a>
                        </p>
                        <p class="woocommerce-loop-product__title">
                            <a href="product-single.html">${product.name}</a>
                        </p>
                        <span class="price">
                            <ins>
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">$</span>${
                                        product.price
                                    }
                                </span>
                            </ins>
                        </span>
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
