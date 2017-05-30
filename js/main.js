$(document).ready(function($) {
    
    //Main button click event
    $("#getQuote").on('click', function() {

        $.ajaxSetup({cache:false});
        
        $.getJSON("https://api.myjson.com/bins/8aoyp",function(data) {
            
            //Show blue quote section
            $('#quote').slideDown();
            
            var randomQ = Math.floor(Math.random()*data.length);
            
            $('.quoteHere').append('<img src="img/quote-left.png" alt="img"> <h3>' + data[randomQ].qt + '</h3>' + '<p>from: ' + data[randomQ].ref +'</p>');
            
        });
        
        $('#quote').empty();
    });

    
    
});
