import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Header from "./Header";
import Spinner from "./Spinner";

/**
 * @class
 * @see https://facebook.github.io/react/docs/react-api.html#react.component
 * @see https://facebook.github.io/react/docs/react-component.html
 */
class Details extends React.Component {
  static defaultProps = {
    show: true
  };

  static propTypes = {
    show: PropTypes.shape({
      description: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      trailer: PropTypes.string,
      year: PropTypes.string.isRequired
    })
  };

  state = {
    apiData: { rating: "" }
  };

  componentDidMount() {
    const { imdbID } = this.props.show;
    axios.get(`http://localhost:3000/${imdbID}`).then(response => {
      this.setState({ apiData: response.data });
    });
  }

  /**
   * @returns {object}
   */
  render() {
    const { description, poster, title, trailer, year } = this.props.show;
    const { rating } = this.state.apiData;
    let ratingComponent;

    if (rating) {
      ratingComponent = <h3>{rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
