import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

/**
 * @see http://facebook.github.io/jest/docs/en/tutorial-react-native.html#snapshot-test
 * @see http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest
 * @see http://airbnb.io/enzyme/docs/api/shallow.html
 * @see https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
 */
test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

/**
 * @see http://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
 */
test("Seach should render correct amount of shows", () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

/**
 * @see http://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
 * @see http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
 */
test("Search should render correct amount of shows based on search term", () => {
  const component = shallow(<Search />);
  const searchWord = "black";
  component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
