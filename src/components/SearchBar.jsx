import React from 'react';
import { connect } from 'react-redux';
import { updateSearchFilter } from './actions';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeUpdateSearchText = props.onKeyPress.bind(this);
    }

    handleChange (event) {
        let current_value = event.target.value;
        this.setState({value: current_value});
        this.onChangeUpdateSearchText(current_value);
    }

    render () {
        return (
            <div >
                <input 
                    type='text' 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.search_filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyPress: (value) => {
            dispatch (updateSearchFilter(value));
        }
    };
};

const SearchBar = connect (
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchBar;
