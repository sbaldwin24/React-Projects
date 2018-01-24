import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../actionCreators";

const Header = props => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">ReactFlix</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

/**
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 */
Header.defaultProps = {
  handleSearchTermChange: function noop() {},
  searchTerm: "",
  showSearch: false
};

Header.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  showSearch: PropTypes.bool
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(e) {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
