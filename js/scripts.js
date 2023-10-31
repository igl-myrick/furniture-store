window.addEventListener("load", function() {
  let productForm = document.querySelector("form#productForm");
  let purchaseForm = document.querySelector("form#purchaseInfo");
  let userProduct = document.querySelector("input[name='product']:checked").value;

  productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#userOrder").removeAttribute("class");

    if (userProduct === "sofa") {
      document.getElementById("userSelection").innerText = "a sofa";
    } else if (userProduct === "chair") {
      document.getElementById("userSelection").innerText = "an armchair";
    } else if (userProduct === "table") {
      document.getElementById("userSelection").innerText = "a table";
    }
  })

  purchaseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#receipt").removeAttribute("class");

    const userShippingInfo = document.getElementById("shipping").value;
    const userPaymentInfo = document.getElementById("paymentInfo").value;

    document.getElementById("userReceipt1").innerText = userProduct;
    document.getElementById("userReceipt2").innerText = userShippingInfo;
    document.getElementById("userReceipt3").innerText = userPaymentInfo;
  })
})