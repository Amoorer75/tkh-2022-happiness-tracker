import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types'
import {
  UserHome,
  CreateEntry ,
  EditEntry,
  Entry
} from './components'

// import EditEntry from './components/EditEntry'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/user" component={UserHome} />
        {/* Default fallback below if path not found */}
        <Route path='/user/create' component={CreateEntry} />
        <Route path='/user/edit' component={EditEntry} />
        <Route path='/user/entry' component={Entry} />
      </Switch> 
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    // loadInitialData() {
    //   dispatch(me())
    // }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
// Routes.propTypes = {
  // loadInitialData: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
// }
