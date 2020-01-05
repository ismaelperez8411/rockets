export const ALL_ROCKETS_REQUEST = 'ALL_ROCKETS_REQUEST'
export const ALL_ROCKETS_SUCCESS = 'ALL_ROCKETS_SUCCESS'
export const ALL_ROCKETS_FAILURE = 'ALL_ROCKETS_FAILURE'

export const getAllRockets = () => ({
  type: ALL_ROCKETS_REQUEST
})

export const ROCKET_REQUEST = 'ROCKET_REQUEST'
export const ROCKET_SUCCESS = 'ROCKET_SUCCESS'
export const ROCKET_FAILURE = 'ROCKET_FAILURE'

export const getRocket = (rocketId) => ({
  type: ROCKET_REQUEST,
  rocketId
})
