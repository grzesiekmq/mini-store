(function Cart() {
    var btnAdd = $('.btn.add'),
        btnCart = $('#btn-cart'),
        qtyTitle = $('<p/>', { 'class': 'qty-title' }).text('Ilość'),
        cartContainer = $('.cart-container'),
        itemContainer = $('<div/>', { 'class': 'item-container' }),
        qtyContainer = $('<div/>', { 'class': 'qty-container' }),
        qty = $('<input/>', { 'type': 'number' }),
        btnQtyAdd = $('<button/>', { 'type': 'button', 'class': 'qty-add' }).text('+'),
        btnQtyRem = $('<button/>', { 'type': 'button', 'class': 'qty-rem' }).text('-'),
        col1 = $('<div/>', { 'class': 'col', 'id': '1' }),
        col2 = $('<div/>', { 'class': 'col', 'id': '2' }),
        col3 = $('<div/>', { 'class': 'col', 'id': '3' }),
        col4 = $('<div/>', { 'class': 'col', 'id': '4' });

    this.add = btnAdd.click(function() {




        cartContainer.append(qtyTitle).append(itemContainer);
        itemContainer.append(col1).append(col2).append(col3).append(col4);
        col1.append($(this).siblings('.img-container').clone());
        col2.append($(this).siblings('.name').clone());
        col3.append(qtyContainer);
        col4.append($(this).siblings('.price').clone());
        qtyContainer.append(qty).append(btnQtyAdd).append(btnQtyRem);

        btnCart.text('Ukryj koszyk');
        cartContainer.text();
    });
    btnCart.click(function() {
        if (btnAdd.data('clicked', 'no')) {
            cartContainer.text('Brak produktów w koszyku');
        }
    });
    btnQtyAdd.click(function() {
        var inc = Number(qty.val()) + 1;

        qty.val(inc);

    });
    btnQtyRem.click(function() {
        var dec = Number(qty.val()) - 1;

        if (Number(qty.val()) === -1) {
            return false;
        } else {
            qty.val(dec);

        }
    });
})();