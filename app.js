/* 

1. Listen for the calculate button event
2. Get the values from the price
3. Get the value from the GST rate
4. Calculate the gst amount
5. Display the latest amount

*/

// UI Elements

const formElement = document.querySelector("form");
const productPrice = document.querySelector("#product-price");
const gstRate = document.querySelector("#gst-rate");
const gstAmount = document.querySelector("#gst-amount");
const totalAmount = document.querySelector("#total-amount");

loadEventLoaders();

function loadEventLoaders() {
  // FORM SUBMIT
  formElement.addEventListener("submit", calculateGST);
}

/* 
 ██████╗ █████╗ ██╗      ██████╗██╗   ██╗██╗      █████╗ ████████╗███████╗     ██████╗ ███████╗████████╗
██╔════╝██╔══██╗██║     ██╔════╝██║   ██║██║     ██╔══██╗╚══██╔══╝██╔════╝    ██╔════╝ ██╔════╝╚══██╔══╝
██║     ███████║██║     ██║     ██║   ██║██║     ███████║   ██║   █████╗      ██║  ███╗███████╗   ██║   
██║     ██╔══██║██║     ██║     ██║   ██║██║     ██╔══██║   ██║   ██╔══╝      ██║   ██║╚════██║   ██║   
╚██████╗██║  ██║███████╗╚██████╗╚██████╔╝███████╗██║  ██║   ██║   ███████╗    ╚██████╔╝███████║   ██║   
 ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝     ╚═════╝ ╚══════╝   ╚═╝                                                                                                           
*/

function calculateGST(event) {
  event.preventDefault();

  let gst_amount = gstAmountCalculation(Number(gstRate.value), Number(productPrice.value));
  updateValues(gst_amount, Number(productPrice.value) + gst_amount);
  productPrice.value = "";
}

function gstAmountCalculation(gst_rate, product_price) {
  return product_price * gst_rate / 100;
}

/* 
██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗    ██╗   ██╗ █████╗ ██╗     ██╗   ██╗███████╗███████╗
██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝    ██║   ██║██╔══██╗██║     ██║   ██║██╔════╝██╔════╝
██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗      ██║   ██║███████║██║     ██║   ██║█████╗  ███████╗
██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝      ╚██╗ ██╔╝██╔══██║██║     ██║   ██║██╔══╝  ╚════██║
╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗     ╚████╔╝ ██║  ██║███████╗╚██████╔╝███████╗███████║
 ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝      ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚══════╝
*/

function updateValues(gst_amount, total_amount) {
    gstAmount.textContent = gst_amount;
    totalAmount.textContent = total_amount;
}
