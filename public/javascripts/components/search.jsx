var React = require("react");

var Search = React.createClass({
  getInitialState() {
    return {
      search: ""
    };
  },
  render() {
    return (
      <div className="search-component">
        <input type="text" onChange={this.changeSearch} />
        <p><span>You are searching for: {this.state.search}</span></p>
      </div>
    );
  },
  changeSearch(event) {
    var text = event.target.value;

    this.setState({
      search: text
    });
  }
});

module.exports = Search;