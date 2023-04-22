class ApplyPage {

    getAPIResponse() {
        cy.intercept('/thanks').as('todos')
        cy.wait('@todos').its('response').should('deep.include', {
            statusCode: 304,
            statusMessage: 'Not Modified',
            body: ''
        })
    }

    applyForJobPosition() {

        cy.origin("https://jobs.lever.co/*", () => {
            cy.get('button').contains('Dismiss').click({
                force: true
            })
            return cy.get('a.postings-btn').contains('Apply for this job', {
                matchCase: false
            }).click()
        })
    }

    fillJobDetailsAndApply() {

        cy.origin("https://jobs.lever.co/*", () => {

            //Upload resume and enter data in mandatory fields
            cy.get("input[data-qa=input-resume]").selectFile({
                contents: Cypress.Buffer.from("file contents"),
                fileName: "TestUserResume.pdf",
            });


            //Entering the user details from testdata file.
            cy.fixture("testData.json").then((userDetails) => {
                cy.get("input[name=name]").type(userDetails.userName, {
                    delay: 100
                });
                cy.get("input[name=email]").type(userDetails.emailId, {
                    delay: 100
                });
                cy.get("input[name=phone]").type(userDetails.mobileNo, {
                    delay: 100
                });
                cy.get("input.card-field-input").type(userDetails.salary, {
                    delay: 100
                });
            });

            cy.get('[type="checkbox"]').check();
            //clicks on submit application button

            return cy.get("button").contains("Submit application").click({
                force: true
            });
        })
    }
}

export default ApplyPage;