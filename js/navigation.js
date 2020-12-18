$(function() {
    mobileMenu.init();
});

const mobileMenu = {
    init: function() {
        this.bindTaps();
        nav = $('header nav');
    }, 
    bindTaps: function() {
        $('#mobile-menu-icon').click(function() {
            nav.toggleClass('show hide');
        });
        $('.x-close').click(function() {
            console.log('x click');
            nav.toggleClass('show hide');
        })
    },
    toggleMenu: function() {
        $('#mobile-menu-icon').next().toggleClass('show hide');
    }
}