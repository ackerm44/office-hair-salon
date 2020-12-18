$(function() {
    let year = new Date().getFullYear();
    $('footer .year').html(year);
    
    routing.init();
});

const routing = {
    init: function() {
        hash = window.location.hash;
        this.getPageData(hash);
        this.bindMenu();
    },
    getPageData: function(hash) {
        let page = "pages/"+hash.substr(1)+".html"; 
        if (hash != "") {
            $.get(page, function(data) {
                $('main').replaceWith(data);
            });
            //also update the url
            mobileMenu.toggleMenu();
        }
    },
    bindMenu: function() {
        $('nav p').click(function() {
            routing.getPageData($(this).data('link'));
        })
    },
    updatePage: function() {

    }
}