beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()
  })

describe('Todo app', () => {
    // it('Should be accessible', () => {
    //     cy.checkA11y()
    // })

    it('NO-CRITICAL, NO-IMAGE-ALT', () => {
      cy.checkA11y(null, {
        includedImpacts: ['critical'],
        rules: {
          'image-alt': { enabled: false}
        }
      })
    })
  })
