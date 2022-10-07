describe('login.qa.studio', function () {
    it('1. Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('[id="forgotEmailButton"]').click();
        cy.get('[id="mailForgot"]').type('test@mail.ru').type('{enter}');
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('[class="exitIcon"]').should('be.visible');
    })

    it('2. Проверка позитивного кейса авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('[id="mail"]').type('german@dolnikov.ru');
        cy.get('[name="pass"]').type('iLoveqastudio1').type('{enter}');
        cy.contains('Авторизация прошла успешно');
        cy.get('[class="exitIcon"]').should('be.visible');
    })

    it('3. Проверка на негативный кейс авторизации (неправильный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('[id="mail"]').type('german@dolnikov.ru');
        cy.get('[name="pass"]').type('iLoveqastudio1124').type('{enter}');
        cy.contains('Такого логина или пароля нет');
        cy.get('[class="exitIcon"]').should('be.visible');
    })

    it('4. Проверка на негативный кейс авторизации (неправильный логин)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('[id="mail"]').type('kirill@dolnikov.ru');
        cy.get('[name="pass"]').type('iLoveqastudio1').type('{enter}');
        cy.contains('Такого логина или пароля нет');
        cy.get('[class="exitIcon"]').should('be.visible');
    })

})
