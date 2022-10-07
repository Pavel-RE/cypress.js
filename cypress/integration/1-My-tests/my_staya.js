describe('staya.dog', function () {
    it('1. Успешная авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('[class="header-bottom__right--link"]').click();
        cy.get('.auth-form > form > [type="email"]').type('pr.test92@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Test0909').type('{enter}');
        cy.contains('Мои заказы');
    })

   it('2. Неправильный пароль', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.visit('https://staya.dog/');
        cy.get('[class="header-bottom__right--link"]').click();
        cy.get('.auth-form > form > [type="email"]').type('pr.test92@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Test093409').type('{enter}');
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})