// Single click - highlight
$("#resultsTable tbody").on("click", "tr", function () {
  $(this).toggleClass("selected");
});

// Double click - edit
$("#resultsTable tbody").on("dblclick", "tr", function () {
  const data = resultsTable.row(this).data();
  openEditModal(data);
});

// Right click - context menu
$("#resultsTable tbody").on("contextmenu", "tr", function (e) {
  e.preventDefault();
  showContextMenu(e.pageX, e.pageY);
});
