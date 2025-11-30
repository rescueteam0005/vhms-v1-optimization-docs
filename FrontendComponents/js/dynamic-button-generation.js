function generateActionButtons(paymentStatus, testStatus) {
  let buttons = "";

  if (paymentStatus === "PAID") {
    if (testStatus === "PENDING") {
      buttons += '<button class="btn-verify">Verify</button>';
    } else if (testStatus === "IN_PROGRESS") {
      buttons += '<button class="btn-validate">Validate</button>';
    } else if (testStatus === "COMPLETED") {
      buttons += '<button class="btn-view">View Results</button>';
      buttons += '<button class="btn-print">Print</button>';
    }
  } else if (paymentStatus === "NOT PAID") {
    buttons +=
      '<button class="btn-payment" style="background-color: red;">Process Payment</button>';
  } else if (paymentStatus === "REJECTED") {
    buttons +=
      '<button class="btn-info" style="background-color: grey;" disabled>Rejected</button>';
  }

  return buttons;
}
