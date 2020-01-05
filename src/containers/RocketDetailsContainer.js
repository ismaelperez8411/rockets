import { connect } from 'react-redux'

import RocketsDetails from '../components/RocketsDetails'
import * as Actions from '../redux/actions'

const mapStateToProps = (state) => ({
  rockets: state.rockets
})

const mapDispatchToProps = (dispatch) => ({
  getRocket: (rocketId) => dispatch(Actions.getRocket(rocketId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketsDetails)
