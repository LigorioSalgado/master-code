// Como se llama el test, callback
describe('Mi primer test perron', () => {

    // Aquí van las cosas a testear.
    // Que se va a testear, callback
    it('Que existe un texto', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#un-p').contains('Aqui esta un parrafo para que pruebes');
        cy.get('.App-link').contains('Learn React')
    })

    it('Que exista un formulario en la pagina principal', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#user').type('usuario');
        cy.get('#password').type('123');
        cy.get('#onLogin').click();
    });

    it('No se escribe en el password', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#user').type('usuario');
        cy.get('#onLogin').click();
    });

});
