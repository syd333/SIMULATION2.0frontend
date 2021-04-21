import React, {Component} from 'react';


class Search extends Component{
    state = {
        city: ""
    }
    handleChange = (data) => this.setState({city: data});

    //set state with city 
    render() {
    return (
        <div className="searchbar">
            <div className="searchbarinput">
                SEARCH NEW AREA
                <br></br>
                <input 
                    id="filter-state-input"
                    className="input"
                    type="text"
                    placeholder="ENTER CITY"
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <br></br>
                 <button href="/" type="submit" className="searchbutton">
                SEARCH
              </button>
        </div>
    </div>
    )
    }
}

export default Search;