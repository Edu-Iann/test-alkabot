import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import root from './reducers/listToRender';

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export default store;
