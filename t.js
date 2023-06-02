$(document).ready(function () {
    function addItem(category, imageUrl, description) {
        let itemHtml = `
        <div class="item" data-description="${description}">
            <img src="${imageUrl}" alt="${description}">
            <div class="overlay">${description}</div>
        </div>
        `;

        $("#" + category + " .items-container").append(itemHtml);
    }

    $("#add-item").on("click", function () {
        $("#add-item-form").show();
    });

    $("#add-item-form form").on("submit", function (event) {
        event.preventDefault();

        let category = $("#form-category").val();
        let imageUrl = $("#form-image-url").val();
        let description = $("#form-description").val();

        addItem(category, imageUrl, description);

        // Clear the form fields and hide the form
        $("#form-category").val("activity");
        $("#form-image-url").val("");
        $("#form-description").val("");
        $("#add-item-form").hide();
    });

    $(document).on("click", ".item", function () {
        window.location.href = "join_page.html";
    });
});