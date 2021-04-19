import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Auth} from '../../actions/index';

//have user information 
// set 
//have space to change location?
class Profile extends Component {
    render () {
        return (
            <div className="profilecontainer">
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {Auth})(Profile);