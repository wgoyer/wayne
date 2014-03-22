window.onload = function(){
    //Active menu code.  Add event listener on each menu item to change class of li when clicked.
    var menuItems = document.getElementsByClassName('menu');
    for(var i=0;i<menuItems.length;i++){
        addMenuEvents(menuItems[i]);
    }
    if(location.hash !== ""){
        changeActiveMenu();
        loadHashPage();
    }
    $("#sortable").sortable();
};
window.onhashchange = function(){
    loadHashPage();
};
var addMenuEvents = function(menuItem){
    menuItem.addEventListener("click", function(){
       $(".active").removeClass("active");
       $(event.target).parent().addClass("active");
    });
};

var loadHashPage = function(){
    var hashURI = "";
    if(location.hash===""){
        hashURI = "/public/html/home.html";
    } else {
        hashURI = "/public/html/"+location.hash.substr(1)+".html";
    }
    $(".contents").load(hashURI);
}

var changeActiveMenu = function(){
    $(".active").removeClass("active");
    $('a[href='+location.hash+']').parent().addClass("active");
}