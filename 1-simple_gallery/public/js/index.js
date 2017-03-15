$(document).ready(function(){
    var items = $('.gallery img');
    var itemsByTag = {};

    // iterate over the elements
    items.each(function(i){
        var el = $(this);
        var tags = el.data('tags').split(',');

        // add data attribute for quicksand
        el.attr('data-id', i);

        $.each(tags, function(key, value){
            value = $.trim(value);

            if(!(value in itemsByTag)) {
                itemsByTag[value] = [];
            }

            itemsByTag[value].push(el);
        });
    });

    createList('All Items', items);

    $.each(itemsByTag, function(k, v){
        createList(k, v);
    });

    $('#navigation a').on('click', function(e){
        var link = $(this);

        link.addClass('active').siblings().removeClass('active');

        $('.gallery').quicksand(link.data('list').find('img'));

        e.preventDefault();
    });

    $('#navigation a:first').click();

    //the createList function
    function createList(text, items) {
        var main = $('<main>', {'class':'hidden'});

        $.each(items, function(){
            $(this).clone().append(main);
        });

        main.append('body');

        var a = $('<a>', {
            html: text,
            href: '#',
            data: {list: ul}
        }).append('navigation');
    }

});