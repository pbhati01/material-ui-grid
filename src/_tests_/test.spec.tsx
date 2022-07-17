import { render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";
import AirlineListDetails from "../components/AirlineListDetails";

const renderAirlineListDetails = () =>
  render(
    <Provider store={store}>
      <AirlineListDetails />
    </Provider>
  );

describe("Test Airline List Component", () => {
  beforeEach(() => renderAirlineListDetails());
  test("On Successful load should render airline list details", async () => {
    const pageTitle = screen.getByTestId("airline-page-heading");
    expect(pageTitle).toHaveTextContent("Airlines");
  });

//   test("Should render server data with valid token", async () => {
//     const tbody = screen.getByTestId("tbody");
//     expect(tbody).toContainHTML("<tr>");
//   });

//   test("Should not render server with invalid token", async () => {
//     store.dispatch(setToken({ token: "test" }));
//     const tbody = screen.getByTestId("tbody");
//     expect(tbody).toContainHTML("");
//   });
});
