/// <reference types="Cypress" />
import {
    CareerOpportunities,
    ApplyPage
} from "../pages/index";

const careerOpportunities = new CareerOpportunities();
const applyPage = new ApplyPage();

describe("Test Suite 1 - Userlane career page search", () => {
    before(() => {
        cy.visit("/");
    });

    it("Should show open positions on career page", () => {
        //In subsequent test there are changes of getting privacy policy, accept if it is there
        careerOpportunities.acceptPrivacyPolicy();

        //Assert that UI is correctly rendering the open position title
        cy.get("div").should("contain", "Open Positions");
        cy.get("div").should("contain", "Join our team");

        //Get open positions
        careerOpportunities.getEngineeringJob();

        careerOpportunities.getQAJob();
    });

    it("Should correctly return the response for open positions", () => {
        //Can also use intercept to stub response and avoid interaction with real env
        cy.intercept({
            method: "GET",
            url: "https://api.lever.co/v0/postings/userlane?group=team&mode=json",
        }).as("getOpenPositions");

        cy.visit("/");

        cy.wait("@getOpenPositions").then((result) => {
            var response = result.response?.body;
            expect(result.response?.statusCode).to.eq(200);
            expect(response[0].title).to.exist;
            expect(response[0].postings).to.exist;
        });
    });
});


describe("Test Suite 2 - Userlane apply for open QA positions", () => {

    before(() => {
        cy.visit("/");
    });

    it("Should apply for open qa position", () => {

        cy.intercept({
            url: '/userlane/*/thanks',
        }).as('successfullySubmitted') // and assign an alias

        //In subsequent test there are changes of getting privacy policy, accept if it is there
        careerOpportunities.acceptPrivacyPolicy();

        //Get open positions
        careerOpportunities.getEngineeringJob();

        //Apply for open QA Positions
        careerOpportunities.getQAJob();
        applyPage.applyForJobPosition()
        applyPage.fillJobDetailsAndApply()

        /*  
        This will fail the test as the captcha verification will not allow this interceptor to pass
        cy.wait('@successfullySubmitted').then((interception) => {
              const response = interception.response?.body
              //console.log('interception : ', response)
              expect(result.response?.statusCode).to.eq(200);
          });*/
    });


});