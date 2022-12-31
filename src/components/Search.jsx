import React from "react";

class Search extends React.Component {
  state = {
    search: "matrix",
    type: "all",

  };
  handleKey = (event) => {
    if (event.key === "Enter") {
        this.props.searchMovies(this.state.search, this.state.type)
    }
  };

  handleFilter = (event) => {
    this.setState(
        ()=>({ type: event.target.dataset.type }), 
        ()=>{
        this.props.searchMovies(this.state.search, this.state.type)
    });
    
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
              onKeyDown={this.handleKey}
            />
            <button
              className="btn saarch-btn"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'all'}
                data-type="all"
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'movie'}
                data-type="movie"
                onChange={this.handleFilter}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'series'}
                data-type="series"
                onChange={this.handleFilter}
              />
              <span>Series only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                checked={this.state.type === 'game'}
                data-type="game"
                onChange={this.handleFilter}
              />
              <span>Game only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
