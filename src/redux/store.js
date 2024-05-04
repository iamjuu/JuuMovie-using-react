import { createStore } from 'redux';
import formReducer from "./Reducer"


const saveStateToLocalStorage =(state) =>{

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
      } catch (e) {
        console.error('Could not save state', e);
      }
}

const loadStateFromLocalStorage = ()=> {

    try {
        const serializedState = localStorage.getItem('reduxState');
        return serializedState ? JSON.parse(serializedState):undefined;


    } catch (e) {
            console.error('Could not load state', e);
            return undefined;

    }

}
    const persistedState = loadStateFromLocalStorage();

    const store = createStore(formReducer, persistedState);
    store.subscribe(() => {
        saveStateToLocalStorage(store.getState());
      });


export default store;