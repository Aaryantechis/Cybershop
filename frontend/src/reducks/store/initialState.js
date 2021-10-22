const initialState = {
  posts: {
    list: [],
  },
  products: {
    list: [],
  },
  cart: {
    list: [],
    subtotal: 0,
  },
  user: {
    username: "",
    email: "",
    token: "",
    token_expires_at: "",
  },
  signin: {
    email: "",
    password: "",
  },
};

export default initialState;
