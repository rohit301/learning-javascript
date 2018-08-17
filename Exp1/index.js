document.ready( function(){
    $.getJSON('items.json', function(data) {
        $.each(data.items, function(i,f) {
            $("ul").append("<li>URL: "+f.url+"</li><li>Caption: "+f.caption+"</li><br />");
    
        });
    });
});
