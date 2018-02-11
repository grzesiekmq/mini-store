(function Cart() {
    var $btnAdd = $('.btn.add'),
        $btnCart = $('#btn-cart'),
        $qtyTitle = $('<p/>', { 'class': 'qty-title' }).text('Ilość'),
        $cartContainer = $('#cart-container'),
        cartContainer = document.querySelector('#cart-container'),
        itemContainer = document.createElement('div'),
        $itemContainer = '<li class="item-container"></li>',
        $qtyContainer = $('<div/>', { 'class': 'qty-container' }),
        $qty = $('<input/>', { 'type': 'number' }),
        $btnQtyAdd = $('<button/>', { 'type': 'button', 'class': 'qty-add' }).text('+'),
        $btnQtyRem = $('<button/>', { 'type': 'button', 'class': 'qty-rem' }).text('-'),
        $del = $('<button/>', { 'type': 'button', 'class': 'del' }).text('X'),
        $sum = 0;
    var grid = new Muuri('.container', {
        layoutOnInit: false,
        sortData: {
            price: function(item, element) {




                return parseInt($(this).find('[data-price]'));
            },
            name: function(item, element) {
                return $(this).find('.name').text();
            }
        }
    });
    grid.refreshSortData();




    $btnAdd.click(function() {
        $cartContainer.append($qtyTitle);

        $cartContainer.append('<li class="item-container"><div class="col first"></div><div class="col second"></div><div class="col third"></div><div class="col fourth"></div><div class="col fifth"></div></li>');






        $('.col.first').append($(this).siblings('.img-container').clone());
        $('.col.second').append($(this).siblings('.name').clone());
        $('.col.third').append($qtyContainer);
        $('.col.fourth').append($(this).siblings('.price').clone().css(
            'display', 'inline-block')).append($del);
        $del.css('margin-left', '10em');
        $qtyContainer.append($qty).append($btnQtyAdd).append($btnQtyRem);
        $('.col.fourth').find('.price').each(function() {
            //console.log(parseInt($(this).text()));
            $sum += parseInt($(this).text());
            console.log($sum);

        });

        $('.col.fifth').html('<p class="sum">Suma ' + $sum + 'zł </p>');


        $('.del').click(function() {
            $(this).closest('li').remove();
        });


        $btnCart.text('Ukryj koszyk');
        $cartContainer.text();
    });
    $btnCart.click(function() {
        if ($btnAdd.data('clicked', 'no')) {
            $cartContainer.text('Brak produktów w koszyku');
        }
    });
    $btnQtyAdd.click(function() {
        var inc = Number($qty.val()) + 1;

        $qty.val(inc);

    });
    $btnQtyRem.click(function() {
        var dec = Number($qty.val()) - 1;

        if (Number($qty.val()) === -1) {
            return false;
        } else {
            $qty.val(dec);

        }
    });
    $('.sort').change(function() {
        if ($(this).find(':selected').text() === 'Cena') {
            grid.sort('price');

            //$('.container').detach();
            //$('.price').each(function() {
            //    Number($(this).text()).sort();
            //    console.log($(this).text());
            // });
        } else if ($(this).find(':selected').text() === 'Nazwa') {
            grid.sort('name');
        }
    });




})();