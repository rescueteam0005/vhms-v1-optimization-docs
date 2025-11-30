// lab/results.php
$(document).ready(function () {
  const resultsTable = $("#resultsTable").DataTable({
    order: [[0, "desc"]], // Latest first
    ajax: {
      url: "api/lab/results/fetch.php",
      dataSrc: "data",
    },
    columns: [
      { data: "lab_code" },
      { data: "patient_name" },
      { data: "requesting_doctor" },
      { data: "test_status" },
      {
        data: "payment_status",
        render: function (data) {
          const colors = {
            "NOT PAID": "red",
            PAID: "green",
            REJECTED: "grey",
          };
          return `<span style="color: ${colors[data]}">${data}</span>`;
        },
      },
    ],
  });
});
