import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "./Header";
import ShowCard from "./ShowCard";

const Search = ({ searchTerm, shows }) => (
  <div className="search">
    <Header showSearch />
    <div>
      {shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

Search.defaultProps = {
  shows: false
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  shows: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
