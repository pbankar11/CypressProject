/// <reference types= "cypress" />

it('google test',function(){

    
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation step by steps{enter}')
    //cy.get(cy.get('.dmenKe > .cIkxbf > .usJj9c > :nth-child(1) > .VttTV > :nth-child(1) > h3 > .l')).click()
    cy.wait(5000)
    cy.contains('videos').click()


   })


//    it('Verify user is not able to add the details without enterting the required details',function(){

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get('input.oxd-input.oxd-input--active[name="username"]')
//        .should('have.attr', 'placeholder', 'Username')
//        .type('Admin');
//     cy.get('input.oxd-input.oxd-input--active[type="password"][name="password"]')
//        .should('have.attr', 'placeholder', 'Password')
//        .type('admin123'); // Replace 'your_password' with the actual password you want to enter
//     cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
//        .click();
//     cy.get(':nth-child(1) > .oxd-main-menu-item').click()
//     cy.get('.orangehrm-header-container > .oxd-button').click()
//     cy.contains('div.oxd-select-text-input', '-- Select --')
//       .click();
//     cy.get('.oxd-button--secondary').click().should('contain.text', 'Save')

it.only('Verify user is able to add the details enterting the required details',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input.oxd-input.oxd-input--active[name="username"]')
      //  .should('have.attr', 'placeholder', 'Username')
       .type('Admin');
    cy.get('input.oxd-input.oxd-input--active[type="password"][name="password"]')
       .should('have.attr', 'placeholder', 'Password')
       .type('admin123'); // Replace 'your_password' with the actual password you want to enter
    cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
       .click();
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.contains('div.oxd-select-text-input', '-- Select --')
      .click();
    cy.wait(10000);
    cy.get('.oxd-select-text-input').contains('Admin').click();
    // cy.get('.oxd-button--secondary').click().should('contain.text', 'Save')
    


    

    



    


    



    








   })