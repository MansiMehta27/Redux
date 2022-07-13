import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configurstore=()=>{
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}