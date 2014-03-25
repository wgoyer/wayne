window.onload = function(){
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
    return false;
};
var addMenuEvents = function(menuItem){
    $(menuItem).on("click", function(){
       $(".active").removeClass("active");
       $(event.target).parent().addClass("active");
    });
    return false;
};
var loadHashPage = function(){
    var hashURI = "";
    if(location.hash===""){
        hashURI = "/public/html/home.html";
    } else {
        hashURI = "/public/html/"+location.hash.substr(1)+".html";
    }
    loadImageOnHover(hashURI);
    return false;
};
var changeActiveMenu = function(){
    $(".active").removeClass("active");
    if($('a[href='+location.hash+']')) {
        $('a[href='+location.hash+']').parent().addClass("active"); 
    }
    return false;
};

var loadImageOnHover = function(uri){
    $(".contents").load(uri, function(){
    var theImage = "";
        if(location.hash==="#herokuHowTo"){
            $(".contents a").hover(function(e){
                if(e.target.id === "cat") {
                    theImage = ".imgMouseOver2";
                } else if (e.target.id === "baby"){
                    theImage = ".imgMouseOver1";
                }
                var x = e.clientX,
                    y = e.clientY;
                $(theImage).css({top: y, left : x}).show();
            }, function(){
                $(theImage).hide();
                theImage = "";
            });
        }
    });
    return false;
};