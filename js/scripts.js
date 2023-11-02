window.addEventListener("load", function() {
  let productForm = document.querySelector("form#productForm");
  let purchaseForm = document.querySelector("form#purchaseInfo");
  let userProduct = document.querySelector("input[name='product']:checked").value;
  let discountedPrice;
  
  let price;
  if (userProduct === "sofa") {
    price = 80;
  } else if (userProduct === "chair") {
    price = 50;
  } else if (userProduct === "table") {
    price = 100;
  }
  
  function productSelection(discount) {
    document.getElementById("userSelection").innerText = userProduct;
    discountedPrice = (price - discount);
    document.getElementById("discount").innerText = "DISCOUNT: We currently have a 20% discount running on " + userProduct + "s! Your order has been reduced to $" + discountedPrice + ".";
  }

  productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#userOrder").removeAttribute("class");
    
    if (userProduct === "sofa") {
      productSelection(16);
    } else if (userProduct === "chair") {
      productSelection(10);
    } else if (userProduct === "table") {
      productSelection(20);
    }
  });

  purchaseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector("div#receipt").removeAttribute("class");

    const userShippingInfo = document.getElementById("shipping").value;
    const userPaymentInfo = document.getElementById("paymentInfo").value;

    document.getElementById("userReceipt1").innerText = userProduct.toUpperCase() + " - $" + discountedPrice;
    document.getElementById("userReceipt2").innerText = userShippingInfo.toUpperCase();
    document.getElementById("userReceipt3").innerText = userPaymentInfo.toUpperCase();
  });
});