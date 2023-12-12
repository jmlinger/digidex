describe('Search Bar', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should contain elements in the search bar', () => {
    cy.get('nav input').should('exist')

    cy.get('nav label').should('exist')

    cy.get('nav select').should('exist')

    cy.get('nav img').should('exist')

    cy.get('nav button').should('exist')
  })

  it('Should verify if search button is able or disable', () => {
    cy.get('nav button').should('be.disabled')

    cy.get('nav input').type('a')

    cy.get('nav button').should('not.be.disabled')

    cy.get('nav input').clear()

    cy.get('nav button').should('be.disabled')

    cy.get('nav select').select('Rookie')

    cy.get('nav button').should('not.be.disabled')

    cy.get('nav select').select('None')

    cy.get('nav button').should('be.disabled')
  })
})

describe('Pagination Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should contain elements in the pagination section', () => {
    cy.get('#pagination h1').should('exist')

    cy.get('#pagination button:contains("Prev")').should('exist')

    cy.get('#pagination button:contains("Next")').should('exist')

    cy.get('#pagination button.pages').should('exist')

    cy.get('#pagination #pageSelector').should('exist')

    cy.get('#pagination label').should('exist')

    cy.get('#pagination #elements-per-page').should('exist')
  })

  it('Should change the number of cards per page', () => {
    cy.get('#pagination select').select('40')

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      40,
    )

    cy.get('#pagination select').select('20')

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      20,
    )
  })

  it('Should change the pages', () => {
    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      10,
    )

    cy.get('nav select').select('Armor')

    cy.get('nav button').click()

    cy.get('#pagination button:contains("Prev")').should('be.disabled')

    cy.get('#pagination button:contains("Next")').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      2,
    )

    cy.get('#pagination button:contains("Next")').should('be.disabled')

    cy.get('#pagination button:contains("Prev")').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      10,
    )
  })
})

describe('Cards Container Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should contain elements in the cards container', () => {
    cy.get('#cards-container .card').should('have.length', 10)

    cy.get('#cards-container .card').each((card) => {
      cy.wrap(card).find('h1').should('exist')

      cy.wrap(card).find('button').should('exist')

      cy.wrap(card).find('img').should('exist')
    })
  })
})

describe('Search bar Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should search for "Agumon" and filter by "Rookie"', () => {
    cy.get('nav input').type('Agumon')

    cy.get('nav select').select('Rookie')

    cy.get('nav button').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      2,
    )
  })

  it('Should search for "garurumon"', () => {
    cy.get('nav input').type('garurumon')

    cy.get('nav button').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      3,
    )
  })

  it('Should filter by "In Training"', () => {
    cy.get('nav select').select('In Training')

    cy.get('nav button').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      9,
    )
  })

  it('Should search for "metal" and bring up all digimon when clicking on the digimon logo', () => {
    cy.get('nav input').type('metal')

    cy.get('nav button').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      5,
    )

    cy.get('nav img').click()

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      10,
    )

    cy.get('#pagination h1').contains('209')
  })

  it('Should search for a digimon that doesnt exist and expects a not found message', () => {
    cy.get('nav input').type('Digimon that doesnt exist')

    cy.get('nav select').select('Champion')

    cy.get('nav button').click()

    cy.get('#not-found').should('exist')
  })
})

describe('Scroll Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should scroll down and back to the top', () => {
    cy.get('#pagination select').select('40')

    cy.get('#cards-container .card', { timeout: 10000 }).should(
      'have.length',
      40,
    )

    cy.scrollTo('bottom')

    cy.get('#up-button').should('be.visible')

    cy.get('#up-button').click()

    cy.get('#up-button').should('not.be.visible')

    cy.window().its('scrollY').should('equal', 0)
  })
})
