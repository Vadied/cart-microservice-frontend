import { mount as productMount } from "products/ProductIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("container");

productMount(document.getElementById("my-products"));
cartMount(document.getElementById("my-cart"));
