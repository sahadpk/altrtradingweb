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
            image: "imager/imagesaltr/shop1-Photoroom.png",
            isNew: true,
        },
        {
            id: 2,
            name: "Aerosol Premium",
            category: 12,
            mainCategory: 1,
            price: 89,
            image: "imager/imagesaltr/shop2-Photoroom.png",
            isSale: true,
        },
        {
            id: 3,
            name: "Standard Fragrance Oil",
            category: 21,
            mainCategory: 2,
            price: 45,
            image: "imager/imagesaltr/shop3-Photoroom.png",
        },
        {
            id: 4,
            name: "Premium Fragrance Oil",
            category: 22,
            mainCategory: 2,
            price: 65,
            image: "imager/imagesaltr/shop7-Photoroom.png",
            isNew: true,
        },
        {
            id: 5,
            name: "250ml Fresh Air",
            category: 31,
            mainCategory: 3,
            price: 35,
            image: "imager/imagesaltr/shop8-Photoroom.png",
        },
        {
            id: 6,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop9-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop4.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop12-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop10-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop19-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop20-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop24-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop25-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop26-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop27-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop28-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop29-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop30-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop31-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop32-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop33-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop34-Photoroom.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop35.png",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop38.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop14.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop16.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop37.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop18.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop39.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop40.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop41.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop42.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop43.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop44.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop45.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop46.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop47.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop48.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop49.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop50.jpg",
            isSale: true,
        },
        {
            id: 7,
            name: "300ml Mountain Breeze",
            category: 32,
            mainCategory: 3,
            price: 42,
            image: "imager/imagesaltr/shop51.jpg",
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
