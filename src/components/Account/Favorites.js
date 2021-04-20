import React, {Component} from 'react';
import { connect } from 'react-redux';

class Favorites extends Component {
   
    render() {
        console.log(this.props.favorites.favorite)
        return(
            <div className="favecontainer">
                yo favorites
                
                {/* {this.props.favorites.like.map(like => like === true )
                return } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        favorites: state.favorite.favorites
    }
}

export default connect(mapStateToProps)(Favorites);