import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'

export class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const user = this.props.user

    return (
      <div className="userprofile">
        <img src={user.imageUrl} />
        <div>
          Name: {user.firstName} {user.lastName}
        </div>
        <div>Email: {user.email}</div>
        <div>Address: {user.address}</div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    user: state.user
  }
}
const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(me())
  }
}
export default connect(mapState, mapDispatch)(UserProfile)
