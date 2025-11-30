function updateResult(resultId, newData) {
  $.ajax({
    url: "ajax_update_result.php",
    method: "POST",
    data: {
      id: resultId,
      result_value: newData.result_value,
      normal_range: newData.normal_range,
    },
    success: function (response) {
      if (response.success) {
        // Refresh DataTable
        resultsTable.ajax.reload(null, false);
        showNotification("Result updated successfully", "success");
      }
    },
    error: function () {
      showNotification("Update failed", "error");
    },
  });
}
