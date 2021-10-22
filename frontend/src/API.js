import axios from "axios";

var baseURL;

baseURL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
  signUp = async (username, email, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/user/signup/", formData)
      .then((response) => {
        console.log("hello world");
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  signIn = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const savedPost = await api
      .post("/user/signin/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  /////////////////////////
  // Products
  /////////////////////////
  getProducts = async () => {
    let url = "/items/";
    const products = await api
      .get(url)
      .then((response) => {
        console.log("dsdsd", response.data);
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return products;
  };
  getProduct = async (id) => {
    const product = await api
      .get("/items/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return product;
  };
  getCarts = async () => {
    const carts = await api
      .get("cart/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return carts;
  };

  addCarts = async (item_id) => {
    const savedCart = await api
      .post("/cart/add/", {
        item: item_id,
        quantity: 1,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  updateCarts = async (cart_id, quantity) => {
    const savedCart = await api
      .put("/cart/update/" + cart_id + "/", {
        quantity: quantity,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedCart;
  };

  deleteCarts = async (cart_id) => {
    const response = await api
      .delete("/cart/delete/" + cart_id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
}
