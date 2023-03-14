import faker from "faker";

const mount = (el) => {
  const products = new Array(5)
    .map(() => {
      const name = faker.commerce.productName();
      return `<div>${name}</div>`;
    })
    .join();

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");

  if (el) mount(el);
}

export { mount };
