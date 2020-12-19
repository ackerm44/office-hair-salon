$(function() {
    setYear();    
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
            window.location = window.location.pathname + hash;
            if (window.innerWidth < 960) {
                mobileMenu.toggleMenu();
            }
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

const setYear = () => {
    let year = new Date().getFullYear();
    $('footer .year').html(year);
}