import React from 'react'
import App from './App'

describe('<App />', () => {
  //Demo test
  it('displays the correct title', () => {
    cy.mount(<App />)

    cy.get('[data-id="App-title"]').should("have.text", "Hi React Enthusiast. I created this simple translation - the string is located in en/translation.json");
  })
})