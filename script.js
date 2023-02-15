/* MENU */
$(".header_toggle").click(function () {
    if($("body").hasClass("body-pd")){
        $("#body-pd").removeClass("body-pd");
        $("header").removeClass("body-pd");
        $("#nav-bar").removeClass("show");
        $("#header-toggle").removeClass("bx-x");
    }
    else{
        $("body").addClass("body-pd");
        $("header").addClass("body-pd");
        $("#nav-bar").addClass("show");
        $("#header-toggle").addClass("bx-x");
    };
 });

/* LINK MENU*/
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'nav_link active';
    }
}
