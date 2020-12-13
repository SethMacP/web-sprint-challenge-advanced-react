import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const wordCheck = screen.getByText(/checkout form/i);
    expect(wordCheck).toBeInTheDocument();


});

test("form shows success message on submit with form details", () => {
//arrange
render(<CheckoutForm />);
const firstNameInput = screen.getByTestId("firstName")
const lastNameInput = screen.getByTestId("lastName")
const addressInput = screen.getByTestId("address")
const cityInput = screen.getByTestId("city")
const stateInput = screen.getByTestId("state")
const zipInput = screen.getByTestId("zip")
const button = screen.getByRole("button", {name: "Checkout"})
//act


userEvent.type( firstNameInput  ,  "Seth")
userEvent.type( lastNameInput   ,  "MacPherson")
userEvent.type( addressInput    ,  "1234 Street Way")
userEvent.type( cityInput       ,  "Las Vegas")
userEvent.type( stateInput      ,  "Nevada")
userEvent.type( zipInput        ,  "98765")
userEvent.click(button);
//assert
const successStatus = screen.getByTestId("successMessage")
expect(successStatus).toBeInTheDocument();
});
