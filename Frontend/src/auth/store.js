import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import { sessionService } from "redux-react-session";

const initialState = {};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));

sessionService.initSessionService(store);

export default store;