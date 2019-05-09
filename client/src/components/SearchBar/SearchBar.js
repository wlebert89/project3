import React from "react";
import "./search.css";

class SearchBar extends React.Component {
    state = {
        search: ""
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.search);
        this.setState({
            search: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.search}
                            onChange={e => this.setState({ search: e.target.value })}
                            className="form-control"
                            placeholder={this.props.placeholder}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;