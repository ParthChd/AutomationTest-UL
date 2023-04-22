declare namespace Cypress {
    interface Chainable<Subject> {
      login(email: string, password: string): void;
      bypassRecaptcha(): Cypress.Chainable
    }
  }
//This would have worked for reCaptcha but not in our case since that is hcaptcha
  Cypress.Commands.add('bypassRecaptcha', () => {
    cy.wait(5000);
   return cy.get("iframe[title='reCAPTCHA']").then((recaptchaIframe) => {
      const body = recaptchaIframe.contents();
      cy.wrap(body)
        .find("div.recaptcha-checkbox-border")
        .should((captcha) => {
          expect(captcha).to.be.visible;
        });
    });
  });