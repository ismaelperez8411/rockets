import * as ActionTypes from '../actions'

const initialState = {
  isFetching: false,
  items: []
}

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ALL_ROCKETS_REQUEST:
    case ActionTypes.ROCKET_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case ActionTypes.ALL_ROCKETS_SUCCESS:
      // console.log(state, action.payload,"success");
      return {
        ...state,
        isFetching: false,
        items: action.payload
      }
    case ActionTypes.ALL_ROCKETS_FAILURE:
    case ActionTypes.ROCKET_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case ActionTypes.ROCKET_SUCCESS: {
      // console.log(state,action,"reducers succes");
      let items = state.items.slice()
      items = items.filter((item) => item.id !== action.payload.id)
      items.push(action.payload)

      return {
        ...state,
        isFetching: false,
        items
      }
    }

    default:
      return state
  }
}

export default rockets
