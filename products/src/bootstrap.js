import faker from "faker";

const products = new Array(5)
  .map(() => {
    const name = faker.commerce.productName();
    return `<div>${name}</div>`;
  })
  .join();

document.querySelector("#dev-products").innerHTML = products;
