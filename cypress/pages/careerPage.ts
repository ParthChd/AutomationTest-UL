/// <reference types="Cypress" />
class CareerPage {


    getEngineeringJob() {
        cy.get('div[class="select-container type"] span[class="select2-selection__arrow"]').click()
        cy.get('ul[class="select2-results__options"] li:nth-child(3)').click()
        return cy.get('div.careers-search-results')
    }

    getQAJob() {
        return cy.get('div.careers-search-results').contains('Automation Test Engineer').parent('div').parent('div').contains('VIEW JOB', {
            matchCase: false
        }).click()
    }

    //TODO: Fix this as it currently fails due to wait on first time loading since policy dialogue box is not present
    acceptPrivacyPolicy() {
        return cy.get('div#usercentrics-root').shadow().find('button[data-testid=uc-accept-all-button]').then(($privacyPolicyButton) => {
            if ($privacyPolicyButton.length) {
                cy.wrap($privacyPolicyButton).click()
            }
        })
    }

    getQaItem() {
        return cy.get('a.job-title').eq(3);
    }
}
export default CareerPage