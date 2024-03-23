// state - count :0
// action - increment,decrement, reset 
// reducer --> logic  golo ke handle korbe  
// store --> state golo ke store ko re rakbo and dispatch,print er kaj korbo

//createstore redux theke ni te bcz store ni e kaj korbo
const { createStore } = require("redux");

//constants 
const increment = 'INCREMENT'
const decrement = 'DECREMENT'
const reset = 'RESET'

//state define 
const initialState = {
      count :0
}

//action define--> action golo ke fun er modde reke return korte hobe,ey ta action er type ta return korbe
const incrementCounterAction = () => {
      return {
        type: increment,
      };
}

const decrementCounterAction = () => {
      return {
        type: decrement,
      };
}

const restCounterAction = () => {
      return {
        type: reset,
      };
}

//reducer er maddome logic handle 
//...state mani hocce state e ja aace ta sob ni be just count ni e kaj korbo arki
//create reducer -- reducer 2 ta jinis recieve ko re state and action
//initially kono state toh takte hobe ...

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1,
            };
        
        case decrement:
            return {
                ...state,
                count: state.count - 1,
            };
            
        case reset:
            return {
                ...state,
                count: 0,
            };
    
        default:
            state;
    }
};


// store 
// store er modde reducer ta ke pass ko re di bo

const store = createStore(counterReducer);

//chaile state golo ke print ko re dekte pari
store.subscribe(()=>{
    console.log(store.getState());
})

//then dispatch korte hobe naile kaj korbe nah
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(restCounterAction());



