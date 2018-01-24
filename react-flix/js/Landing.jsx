import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { setSearchTerm } from "./actionCreators";

/**
 * @class
 * @see https://facebook.github.io/react/docs/react-api.html#react.component
 * @see https://facebook.github.io/react/docs/react-component.html
 */
class Landing extends React.Component {
  static propTypes = {
    clearSearchTerm: PropTypes.func.isRequired,
    handleSearchTermChange: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    searchTerm: PropTypes.string.isRequired
  };

  goToSearch = e => {
    e.preventDefault();
    this.props.history.push("/search");
  };

  /**
   * @returns {object}
   */
  render() {
    return (
      <div className="landing">
        <h1>ReactFlix</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
          />
        </form>
        <Link onClick={this.props.clearSearchTerm} to="/search">
          Or Browse All
        </Link>
      </div>
    );
  }
}

/**
 * @see https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(e) {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  },
  clearSearchTerm() {
    dispatch(setSearchTerm(""));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
