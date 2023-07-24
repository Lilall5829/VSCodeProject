"use strict";
const calc = document.querySelector("#calculateTotal");

calc.addEventListener("click", function () {
  const glovesPrice = 28.5;
  const basketPrice = 28.5;
  const jacketPrice = 19.99;
  const taxRate = 0.13;

  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const glovesNumber =
    parseInt(document.querySelector("#glovesNumber").value) || 0;
  const basketNumber =
    parseInt(document.querySelector("#basketNumber").value) || 0;
  const jacketNumber =
    parseInt(document.querySelector("#jacketNumber").value) || 0;

  const subTotal =
    glovesPrice * glovesNumber +
    basketPrice * basketNumber +
    jacketPrice * jacketNumber;
  const taxAmount = subTotal * taxRate;
  const total = subTotal + taxAmount;
  //   const orderConfirmation =
  document.querySelector("#orderConfirmation");
  orderConfirmation.innerHTML = `
      <h2>Order Confirmation</h2>
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Number of Gloves: ${glovesNumber}</p>
      <p>Number of Basket: ${basketNumber}</p>
      <p>Number of Jacket: ${jacketNumber}</p>
      <p>Sub Total: $${subTotal.toFixed(2)}</p>
      <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
      <p>Total: $${total.toFixed(2)}</p>
      <div>
      <input type="submit" value="Checkout" />
      <input type="submit" value="Cancel" />
      </div>
    `;
  document.querySelector("#orderConfirmation").classList.remove("hidden");
});
