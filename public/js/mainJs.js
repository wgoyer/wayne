window.onload = function(){
    //Active menu code.  Add event listener on each menu item to change class of li when clicked.
    var menuItems = document.getElementsByClassName('menu');
    for(var i=0;i<menuItems.length;i++){
        addMenuEvents(menuItems[i]);
    }
};

var addMenuEvents = function(menuItem){
    menuItem.addEventListener("click", function(){
       $(".active").removeClass("active");
       $(event.target).parent().addClass("active");
    });
}