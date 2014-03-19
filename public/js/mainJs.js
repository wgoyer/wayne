window.onload = function(){
    //Active menu code.  Add event listener on each menu item to change class of li when clicked.
    var menuItems = document.getElementsByClassName('menu');
    for(var i=0;i<menuItems.length;i++){
        addMenuEvents(menuItems[i]);
    }
    $("#sortable").sortable();
};

window.onhashchange = function(){
    var hashURI = "";
    if(location.hash===""){
        hashURI = "/public/html/home.html";
    } else {
        hashURI = "/public/html/"+location.hash.substr(1)+".html";
    }
    $.ajax({
        type: 'GET',
        url: hashURI,
        beforeSend: function(){
            $(".contents").html('<h3>The user wants to see</h3> '+location.hash);
        }
    }).success(function(data){
        $(".contents").html(data);
    });

};

var addMenuEvents = function(menuItem){
    menuItem.addEventListener("click", function(){
       $(".active").removeClass("active");
       $(event.target).parent().addClass("active");
    });
};