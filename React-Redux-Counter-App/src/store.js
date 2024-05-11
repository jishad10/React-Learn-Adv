//store er jonno redux laagbe tai
//npm install redux di redux install di te hobe
//store moloto reducer/middleware recieve ko re
//store ke rect e use korte chaile npm install react-redux di te hobe

import { createStore } from 'redux';
import counterReducer from './services/reducers/counterReducers';

const store = createStore(counterReducer);

export default store;
