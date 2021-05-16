import { createStore } from 'redux'
import reducer from '../flux/reducers/index'

const configStore = () => createStore(reducer)

export default configStore