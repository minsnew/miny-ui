describe('miny-ui: MinyUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=minyui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MinyUi!');
    });
});
