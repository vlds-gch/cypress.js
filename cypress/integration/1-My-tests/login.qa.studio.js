describe('Автотесты для формы логина и пароля', function() {
    beforeEach(() => {
        cy.visit('https://login.qa.studio/')
    })

    it('Позитивный кейс авторизации', function() {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('body').find('#exitMessageButton > .exitIcon');
    })

    it('Проверка логики восстановления пароля', function() {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru').type('{enter}');
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('body').find('#exitMessageButton > .exitIcon');
    })

    it('Авторизация с неправильным паролем', function() {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('body').find('#exitMessageButton > .exitIcon');
    })

    it('Авторизация с неправильным логином', function() {
        cy.get('#mail').type('stepan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('body').find('#exitMessageButton > .exitIcon');
    })

    it('Проверка на негативный кейс валидации, логин без @', function() {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации');
    })

    it('Проверка на привидение к строчным буквам в логине', function() {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('body').find('#exitMessageButton > .exitIcon');
    })
})