import { render, screen } from "@testing-library/react";
import React from "react";
import { of } from "rxjs";
import { UserProvider } from "../context/UserContext";
import { HomePage } from "./home-page";

describe('Home Page', () => {
  it('Shows user first name', () => {
    const user = { id: 12345, firstName: "Joao Pedro", lastName: "Henrique" }
    render(<UserProvider userStream={of(user)}><HomePage /></UserProvider>)
    expect(screen.getByText(/Joao Pedro/i)).toBeInTheDocument();
  })

  it('If no user, it shows "Loading"', () => {
    render(<UserProvider userStream={of(undefined)}><HomePage /></UserProvider>)
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  })
})