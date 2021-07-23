describe('user that navigates to the application', () => {

    before(() => {
        cy.visit('http://localhost:3474/') 
    })

    it('is expected to see welcome message', () => {
        cy.get('[data-cy=header]').should('contain.text', 'Hello User')
    })

})