import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./index";
import App from "./App";
import { shallow } from "enzyme";
import { Header } from "./components/Header";
import { PhraseField } from "./components/PhraseField";
import { Category } from "./components/Category";
import { Categories } from "./components/Categories";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Chuck Norris/i)).toBeInTheDocument();
});
describe("should render Header component", () => {
  it("should render Header without props", () => {
    const component = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("should render Categories component", () => {
  it("should render Categories without props ", () => {
    const component = render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("should render Categories component", () => {
  it("should render Categories without props ", () => {
    const component = render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  describe("should render Category component", () => {
    it("should render Category without props ", () => {
      const component = render(
        <Provider store={store}>
          <Category />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
    it("should render Category with props ", () => {
      const category: string = "city";
      const component = render(
        <Provider store={store}>
          <Category category={category} />
        </Provider>
      );
      expect(component).toMatchSnapshot();
    });
  });
});

describe("should render PhraseField component", () => {
  it("should render PhraseField  without props ", () => {
    const component = render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );
    expect(component).toMatchSnapshot();

  });
});


describe("should render App component", () => {
  it("should render App  without props ", () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();

  });
});
