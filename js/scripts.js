// business logic
function getDiscountedPrice(chosenProduct) {
  let price;
  let discountAmount;
  if (chosenProduct === "sofa") {
    price = 80;
    discountAmount = 16;
  } else if (chosenProduct === "chair") {
    price = 50;
    discountAmount = 10;
  } else if (chosenProduct === "table") {
    price = 100;
    discountAmount = 20;
  }
  return price - discountAmount;
}

// ui logic
window.addEventListener("load", function() {
  let productForm = document.querySelector("form#productForm");
  let purchaseForm = document.querySelector("form#purchaseInfo");
  
  function productSelection(userProduct) {
    document.getElementById("userSelection").innerText = userProduct;
    document.getElementById("discount").innerText = "DISCOUNT: We currently have a 20% discount running on " + userProduct + "s! Your order has been reduced to $" + getDiscountedPrice(userProduct) + ".";
  }

  productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#userOrder").removeAttribute("class");
    document.querySelector("div#receipt").setAttribute("class", "hidden");
    let chosenUserProduct = document.querySelector("input[name='product']:checked").value;
    
    productSelection(chosenUserProduct);
  });

  purchaseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#receipt").removeAttribute("class");
    let userProduct = document.querySelector("input[name='product']:checked").value;

    const userShippingInfo = document.getElementById("shipping").value;
    const userPaymentInfo = document.getElementById("paymentInfo").value;

    document.getElementById("userReceipt1").innerText = userProduct.toUpperCase() + " - $" + getDiscountedPrice(userProduct);
    document.getElementById("userReceipt2").innerText = userShippingInfo.toUpperCase();
    document.getElementById("userReceipt3").innerText = userPaymentInfo.toUpperCase();
  });
});