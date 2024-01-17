/// <reference types= "cypress" />

it('learning assertion', function(){
///Implicit assertion
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn',{timeout:6000}).should('contain','Button')
    .should ('have.class','query-btn btn btn-primary')
    .should('be.enabled')
    .should('be.visible')
    cy.get('#query-btn',{timeout:6000}).should('contain','Button')
    .and('have.class','query-btn btn btn-primary')

///Explicit assertion

    expect(true).to.be.true
    let name = 'pravin'
    expect(name).to.be.equal('pravin')
})