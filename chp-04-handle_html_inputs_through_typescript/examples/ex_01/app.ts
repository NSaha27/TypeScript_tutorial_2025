const form = document.getElementById("add-product-form") as HTMLFormElement;
form?.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(ev);
});
// const prodName = document.getElementById("prodName") as HTMLFormElement;
// const prodDesc = document.getElementById("prodDesc") as HTMLFormElement;
// const prodPrice = document.getElementById("prodPrice") as HTMLFormElement;

// const productName: string = prodName.value;
// const productDescription: string = prodDesc.value;
// const productPrice: number = prodPrice.value;

// console.log(productName, productPrice);
// console.log(productDescription);
