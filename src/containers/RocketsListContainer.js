import { connect } from 'react-redux'

import RocketsList from '../components/RocketsList'
import * as Actions from '../redux/actions'

const mapStateToProps = (state) => ({
  rockets: state.rockets
})

const mapDispatchToProps = (dispatch) => ({
  getAllRockets: () => dispatch(Actions.getAllRockets())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketsList)
