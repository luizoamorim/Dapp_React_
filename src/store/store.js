import { createStore, combineReducers } from 'redux'
import usuarioReducer from './Usuario/Usuario.reducer'

const rootReducer = combineReducers({
  usuario: usuarioReducer
})

export default createStore(rootReducer)