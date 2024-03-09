document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("click", function() {
            // Close all other expanded products
            products.forEach(otherProduct => {
                if (otherProduct !== product && otherProduct.classList.contains("expanded")) {
                    otherProduct.classList.remove("expanded");
                }
            });

            // Toggle expansion of the clicked product
            product.classList.toggle("expanded");
        });

        // Prevent the description from expanding when clicking on it
        const description = product.querySelector(".description");
        description.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent the click event from bubbling up to the product
        });
    });
});
