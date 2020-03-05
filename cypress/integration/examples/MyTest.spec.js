describe('My first cypress test',()=>
{
    it('Navigate to site',()=>{
        cy.visit('http://stgclient.vetty.co/client/login')
    })

    it('Login to application',()=>{
        cy.get('input[name=email]').type("vijay@tweeny.in")
        cy.get('#ssn').type("123456")
        cy.get('.login-button-container > .form-control').click()

    })

    it('Create New Candidate',()=>{
        cy.get('.client-nav-item-btn').click()
        cy.get('#firstname').type("RohanTestUser")
        cy.get('#lastname').type("MehtaTestUser")
        cy.get('#email').type("test@mytest.com")
        cy.get('.greyarrow').select('Test')
        cy.get('.greyarrow').children().first().then(function(dropdownEle){

            cy.log(dropdownEle.text())
        })


    })

})