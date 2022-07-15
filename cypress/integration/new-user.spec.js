describe('Adding Users', () => {
    it('you can add users with a name and avatar', () => {
        cy.visit('http://localhost:3001')
        cy.get('.user-list button').click()
        cy.get('[data-test-id=formName]').type("Test User")
        cy.get('[data-test-id=formAvatar]').type("https://i.imgur.com/7zdp9jI.png")
        cy.get('[data-test-id=formButton').click()
        cy.get('.user-list').contains('Test User')
    })
})