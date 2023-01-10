describe('Автотест для покупки в магазине мебели', function() {
    it('Покупка 2 товаров', function() {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(2000);
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(3000);
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Лаврентий');
        cy.get('#billing_last_name').type('Трофимов');
        cy.get('#billing_address_1').type('пр. Амурский, д. 19 к. 8');
        cy.get('#billing_city').type('Вязьма');
        cy.get('#billing_state').type('Смоленская область');
        cy.get('#billing_postcode').type('544174');
        cy.get('#billing_phone').type('+79926054891');
        cy.get('#billing_email').type('seliverst2000@gmail.com');
        cy.get('#place_order').click();
        cy.get('.woocommerce-order').contains('Ваш заказ принят. Благодарим вас.');
    })
})