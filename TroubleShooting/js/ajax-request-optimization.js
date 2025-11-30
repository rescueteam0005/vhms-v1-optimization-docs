// Debounce search input
let searchTimeout;
$("#searchInput").on("keyup", function () {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function () {
    resultsTable.search($("#searchInput").val()).draw();
  }, 300); // Wait 300ms after user stops typing
});
