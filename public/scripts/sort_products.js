function Sort(byWhat){
    if(byWhat === "name")
        sortProductsByName();
    if (byWhat == "price") 
        sortProductsByPrice();
    if (byWhat == "priceDesc")
        sortProductsByPriceDesc();
    if (byWhat == "all")
        getAll();
}

function sortProductsByName(){
    $.ajax({
        url: '/sortByName'
    }).done(function(res){
        $('#products').html('');
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            let search_template = $('#search_template').html();
        
            for (const key in element) {
                search_template = search_template.replaceAll('{'+key+'}' , element[key]);
            }

            $('#products').append(search_template);
        }
            
    })
}

function sortProductsByPrice(){
    $.ajax({
        url: '/sortByPrice'
    }).done(function(res){
        $('#products').html('');
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            let search_template = $('#search_template').html();
        
            for (const key in element) {
                search_template = search_template.replaceAll('{'+key+'}' , element[key]);
            }

            $('#products').append(search_template);
        }
            
    })
}

function sortProductsByPriceDesc(){
    $.ajax({
        url: '/sortByPriceDesc'
    }).done(function(res){
        $('#products').html('');
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            let search_template = $('#search_template').html();
        
            for (const key in element) {
                search_template = search_template.replaceAll('{'+key+'}' , element[key]);
            }

            $('#products').append(search_template);
        }
            
    })
}

function getAll(){
    $.ajax({
        url: '/info/product-category?category=all&color=all&maxPrice=all'
    }).done(function(res){
        $('#products').html('');
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            let search_template = $('#search_template').html();
        
            for (const key in element) {
                search_template = search_template.replaceAll('{'+key+'}' , element[key]);
            }

            $('#products').append(search_template);
        }
            
    })
}
