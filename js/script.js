function highlightCurrentPage() {
  var breadcrumbItems = document.querySelectorAll(".breadcrumb");

  breadcrumbItems.forEach(function (item) {
    // Check if the href attribute matches the current page URL
    if (item.getAttribute("href") === window.location.pathname) {
      item.classList.add(".active");
    } else {
      item.classList.remove(".active");
    }
  });
}

// Initial highlighting check in case the page is loaded with a specific URL
highlightCurrentPage();
