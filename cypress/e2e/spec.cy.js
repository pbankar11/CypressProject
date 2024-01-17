describe('Example for XPath', () => {
  it('Finding the radio button with XPath', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.xpath("//input[@value='radio1']").click({force:true})//if elemenet is not visible or clicable
  })
})