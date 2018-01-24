import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @see https://github.com/styled-components/styled-components
 * @see https://www.styled-components.com/
 * @see http://wesbos.com/tagged-template-literals/
 */
const Wrapper = styled(Link)`
  border: 2px solid #333;
  border-radius: 4px;
  color: #000;
  margin-bottom: 25px;
  overflow: hidden;
  padding-right: 10px;
  text-decoration: none;
  width: 32%;
`;

const Image = styled.img`
  float: left;
  height: 250px;
  margin-right: 10px;
`;

/**
 * @class
 * @see https://facebook.github.io/react/docs/react-api.html#react.component
 * @see https://facebook.github.io/react/docs/react-component.html
 * @see https://reactjs.org/docs/react-component.html#shouldcomponentupdate
 */
class ShowCard extends React.Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  /**
   * @returns {object}
   */
  render() {
    const { description, imdbID, poster, title, year } = this.props;
    return (
      <Wrapper to={`/details/${imdbID}`}>
        <Image
          alt={`${title} Show Poster`}
          src={`../public/img/posters/${poster}`}
        />
        <h3>{title}</h3>
        <h4>({year})</h4>
        <p>{description}</p>
      </Wrapper>
    );
  }
}
export default ShowCard;
