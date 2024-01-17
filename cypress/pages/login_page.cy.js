export class LoginPage {
    loginPage_username = '#uname'

    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    
    constructor() {
      // Constructor code, if needed
    }


    navigate(_url) {
      cy.visit(_url);
    }
  
    enterUsername(_username) {
        cy.get(this.loginPage_username).type(_username);
    }
  
    enterPassword(_password) {
      cy.get(this.loginPage_password).type(_password);
    }
  
    clickLogin() {
      cy.get(this.loginPage_loginButton).click();
    }
  }
  