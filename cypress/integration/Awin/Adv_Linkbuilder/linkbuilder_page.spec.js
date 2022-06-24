///<reference types="cypress" />

describe('Advertiser is able to access and use Linkbuilder UI', () => {

    beforeEach(() => {
        cy.visit('https://ui.d-lhr1-docker-555.dev.awin.com/link-builder/en/awin/advertiser/1001');
        cy.get('#email').clear();
        cy.get('#email').type('bhavesh.mistry@awin.com');
        cy.get('#password').clear();
        cy.get('#password').type('xxxxxx123');
        cy.get('.content').click();
      })
    it("Advertiser is able to access Linkbuilder UI succesfully", () => {
        // cy.get('#popup_ok').click();
        // cy.get('#goDarwin1001').click();
        // cy.get('#advertiser-link-builder').click({force: true});
        cy.get('.fa-sign-out').click({force: true});
    })

    it("Advertiser is able to generate a link", () => {
        // cy.get('#popup_ok').click();
        // cy.get('#goDarwin1001').click();
        // cy.get('#advertiser-link-builder').click({force: true});
        cy.get('[action=""] > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('[action=""] > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('input[name="destinationUrl"]').clear();
        cy.get('input[name="destinationUrl"]').type('www.bbc.co.uk');
        cy.get('.mat-form-field-infix').click();
        cy.get('#mat-option-0 > .mat-option-text').click();
        cy.get('#mat-option-1 > .mat-option-text').click();
        cy.get('.cdk-overlay-backdrop').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').type('autotest1');
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').type('autotest2');
        cy.get('#publisher-selector-checkbox').check();
        cy.get('#publisherInput').clear();
        cy.get('#publisherInput').type('demo');
        cy.get('mat-option:nth-of-type(1) > .mat-option-text').click();
        cy.get(':nth-child(5) > .col-lg-8 > .btn > span').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').should('have.value', 'https://www.awin1.com/cread.php?awinmid=1001&awinaffid=100&campaign=autotest2&clickref=autotest1&ued=https%3A%2F%2Fwww.bbc.co.uk');
        cy.get('.btn-link > span').click();
        cy.get('.fa-sign-out').click({force: true});
    })

    it("Advertiser is able to generate a shortlink", () => {
        // cy.get('#popup_ok').click();
        // cy.get('#goDarwin1001').click();
        // cy.get('#advertiser-link-builder').click({force: true});
        cy.get('[action=""] > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('[action=""] > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('input[name="destinationUrl"]').clear();
        cy.get('input[name="destinationUrl"]').type('www.bbc.co.uk');
        cy.get('.mat-form-field-infix').click();
        cy.get('#mat-option-0 > .mat-option-text').click();
        cy.get('#mat-option-1 > .mat-option-text').click();
        cy.get('.cdk-overlay-backdrop').click();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').type('autotest1');
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').clear();
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .input-group > .form-control').type('autotest2');
        cy.get('#publisher-selector-checkbox').check();
        cy.get('#publisherInput').clear();
        cy.get('#publisherInput').type('demo');
        cy.get('mat-option:nth-of-type(1) > .mat-option-text').click();
        cy.get(':nth-child(5) > .col-lg-8 > .btn > span').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').should('have.value', 'https://www.awin1.com/cread.php?awinmid=1001&awinaffid=100&campaign=autotest2&clickref=autotest1&ued=https%3A%2F%2Fwww.bbc.co.uk');
        cy.get('.btn-link > span').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').click();
        cy.get('#urlSection > :nth-child(1) > .col-sm-8 > .form-control').should('have.value', 'https://tidd.ly/3wt8juK');
        cy.get('.fa-sign-out').click({force: true});
    })
  })