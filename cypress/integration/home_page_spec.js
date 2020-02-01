describe('Home Page test', function() {
    it('successfully loads home page', function() {
        cy.visit('/');
    });
    it('successfully loads aparments page', function() {
        cy.visit('/apartments');
    });
    it('successfully loads history page', function() {
        cy.visit('/history');
    });
    it('successfully loads about page', function() {
        cy.visit('/about');
    });
});
