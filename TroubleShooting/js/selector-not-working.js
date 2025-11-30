// Problem: Event only firing on first column
// ❌ WRONG
$(".tr").on("click", function () {});

// ✅ CORRECT
$("#resultsTable tbody").on("click", "tr", function () {});
