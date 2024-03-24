// state 
// action - increment,decrement, reset,add,delete etc...
// reducer --> logic  golo ke handle korbe  
// store --> state golo ke store ko re rakbo and dispatch,print er kaj korbo
// payload data recieve korbe

//createstore redux theke ni te bcz store ni e kaj korbo
const { createStore } = require("redux");

//constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//state define 
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

//action define--> action golo ke fun er modde reke return korte hobe,ey ta action er type ta return korbe
const getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

//product ekta new value bolte pari ja pass kortechi
//payload value ta recieve ko re reke di be
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//reducer er maddome logic handle 
//...state mani hocce state e ja aace ta sob ni be just count ni e kaj korbo arki
//create reducer -- reducer 2 ta jinis recieve ko re state and action
//initially kono state toh takte hobe ...

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};


// store 
// store er modde reducer ta ke pass ko re di bo

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("rabar"));
store.dispatch(addProductAction("pencil"));



