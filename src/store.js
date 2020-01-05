import { createStore } from 'redux'
import upcomingReducer from './reducers/upcomingReducer'

const initialState = {
  upcomings: []
}
const store = createStore(upcomingReducer, initialState)
export default store
