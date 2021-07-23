describe('user that fills out registration form', () => {

    describe('with valid information', () => {

        before(() => {
            //SETUP
            cy.visit('http://localhost:3474')
            //INTERACTION
            cy.get('[data-cy=registration-form]').within(() => {
                cy.get('[data-cy=email]').type('thomas@gmail.com')
                cy.get('[data-cy=password]').type('password')
                cy.get('[data-cy=submit]').click()
            })
        })

        //ASSERTION
        it('is expected to see a confirmation message', () => {

            cy.get('[data-cy=confirmation-message]')
                .should('contain.text', 'Thank you for registering')

        })

        describe('with invalid information', () => {

            before(() => {
                //SETUP
                cy.visit('http://localhost:3474')
                //INTERACTION
                cy.get('[data-cy=registration-form]').within(() => {
                    // cy.get('[data-cy=email]').type('')
                    cy.get('[data-cy=password]').type('password')
                    cy.get('[data-cy=submit]').click()
                })
            })

            //ASSERTION
            it('is expected to see an error message', () => {

                cy.get('[data-cy=confirmation-message]')
                .should('contain.text', 'You need to fill in your email')

            })


        })

    })

})