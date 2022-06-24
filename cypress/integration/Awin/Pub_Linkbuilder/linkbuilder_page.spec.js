///<reference types="cypress" />

describe('Publisher is able to access and use Linkbuilder UI', () => {

    beforeEach(() => {
        cy.visit('https://ui.d-lhr1-docker-555.dev.awin.com/link-builder/en/awin/publisher/100');
        cy.get('#email').clear();
        cy.get('#email').type('bhavesh.mistry@awin.com');
        cy.get('#password').clear();
        cy.get('#password').type('Sayan18december');
        cy.get('.content').click();
      })
    it("Publisher is able to access Linkbuilder UI succesfully", () => {
        // cy.get('#popup_ok').click();
        // cy.get('#goDarwin100').click();
        // cy.get('#link-Builder').click({force: true});
        cy.get('.fa-sign-out').click({force: true});
    })
        it("Publisher is able to generate a link", () => {
            // cy.get('#popup_ok').click();
            // cy.get('#goDarwin100').click();
            // cy.get('#link-Builder').click({force: true});
            cy.get('#advertiserInput').clear();
            cy.get('#advertiserInput').type('example merchant');
            cy.get('.text-muted').click();
            cy.get('input[name="destinationUrl"]').clear().type('www.bbc.co.uk');
            cy.get('.mat-select-arrow').click();
            cy.get('#mat-option-0 > .mat-option-text').click();
            cy.get('#mat-option-1 > .mat-option-text').click();
            cy.get('#mat-option-2 > .mat-option-text').click();
            cy.get('#mat-option-3 > .mat-option-text').click();
            cy.get('#mat-option-4 > .mat-option-text').click();
            cy.get('#mat-option-5 > .mat-option-text').click();
            cy.get('#mat-option-6 > .mat-option-text').click();
            cy.get('.cdk-overlay-backdrop').click();
            cy.get('input[name="clickValue_value_0"]').clear().type('cr1');
            cy.get('input[name="clickValue_value_1"]').clear().type('cr2');
            cy.get('input[name="clickValue_value_2"]').clear().type('cr3');
            cy.get('input[name="clickValue_value_3"]').clear().type('cr4');
            cy.get('input[name="clickValue_value_4"]').clear().type('cr5');
            cy.get('input[name="clickValue_value_5"]').clear().type('cr6');
            cy.get('input[name="clickValue_value_6"]').clear().type('camp');
            cy.get('.btn.btn-default > span').click();
            cy.get('textarea[name="url"]').click().should('have.value', 'https://www.awin1.com/cread.php?awinmid=1001&awinaffid=100&campaign=camp&clickref=cr1&clickref2=cr2&clickref3=cr3&clickref4=cr4&clickref5=cr5&clickref6=cr6&ued=https%3A%2F%2Fwww.bbc.co.uk');
            cy.get('.fa-sign-out').click({force: true});
        })
        it("Publisher is able to generate a Shortlink", () => {
            // cy.get('#popup_ok').click();
            // cy.get('#goDarwin100').click();
            // cy.get('#link-Builder').click({force: true});
            cy.get('#advertiserInput').clear();
            cy.get('#advertiserInput').type('example merchant');
            cy.get('.text-muted').click();
            cy.get('input[name="destinationUrl"]').clear().type('www.bbc.co.uk');
            cy.get('.mat-select-arrow').click();
            cy.get('#mat-option-0 > .mat-option-text').click();
            cy.get('#mat-option-1 > .mat-option-text').click();
            cy.get('#mat-option-2 > .mat-option-text').click();
            cy.get('#mat-option-3 > .mat-option-text').click();
            cy.get('#mat-option-4 > .mat-option-text').click();
            cy.get('#mat-option-5 > .mat-option-text').click();
            cy.get('#mat-option-6 > .mat-option-text').click();
            cy.get('.cdk-overlay-backdrop').click();
            cy.get('input[name="clickValue_value_0"]').clear().type('cr1');
            cy.get('input[name="clickValue_value_1"]').clear().type('cr2');
            cy.get('input[name="clickValue_value_2"]').clear().type('cr3');
            cy.get('input[name="clickValue_value_3"]').clear().type('cr4');
            cy.get('input[name="clickValue_value_4"]').clear().type('cr5');
            cy.get('input[name="clickValue_value_5"]').clear().type('cr6');
            cy.get('input[name="clickValue_value_6"]').clear().type('camp');
            cy.get('.btn.btn-default > span').click();
            cy.get('textarea[name="url"]').click().should('have.value', 'https://www.awin1.com/cread.php?awinmid=1001&awinaffid=100&campaign=camp&clickref=cr1&clickref2=cr2&clickref3=cr3&clickref4=cr4&clickref5=cr5&clickref6=cr6&ued=https%3A%2F%2Fwww.bbc.co.uk');
            cy.get('.mat-tab-body-content > .row > .col-sm-8 > .col-sm-12 > :nth-child(1) > span').click();
            cy.get('textarea[name="url"]').click().should('have.value', 'https://tidd.ly/3xwRvlW');
            cy.get('.fa-sign-out').click({force: true});
        })
    })    