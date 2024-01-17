import { LoginPage } from "../pages/login_page.cy";


beforeEach(() => {
    cy.log('I am running outside the describe block');
  });


  
describe('All login related tests are here', () => {


  const loginPageInstance = new LoginPage();


  beforeEach(() => {
    loginPageInstance.navigate('https://trytestingthis.netlify.app/');
  });

    it('login Test with valid username and password', function(){
        
            
        loginPageInstance.enterUsername('test');
        loginPageInstance.enterPassword('test');
        loginPageInstance.clickLogin();

        cy.contains('Login Successful')
        cy.contains('here').click()

    })

    it('login Test with invalid usename', function(){

        loginPageInstance.navigate('https://trytestingthis.netlify.app/');
        loginPageInstance.enterUsername('test1');
        loginPageInstance.enterPassword('test');
        loginPageInstance.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('Wrong Credentials ! Try again!');
        });
        


    })

    it.skip('login Test with invalid password', function(){

        loginPageInstance.navigate('https://trytestingthis.netlify.app/');
        loginPageInstance.enterUsername('test');
        loginPageInstance.enterPassword('test1');
        loginPageInstance.clickLogin();
        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('Wrong Credentials ! Try again!');
        });
        


    })
});


    

