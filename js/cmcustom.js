/*
 * Topbar content events
 */
$(window).load(function () {
    var buttonColepsed = $('.collepsed-visible');
    $(".home-second-option").css({backgroundSize: "contain"});
    var $window = $(window);
    var windowsize = $window.width();
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
            $('a.navbar-brand').addClass('active-welcome');
            $('.container > .main-menu-list.col-xs-12')
                    .css({
                        'border': 'none',
                        'width': '80%'
                    });
            $('.container > .alter-menu-list.col-xs-6')
                    .css({
                        'border': 'none',
                        'width': '20%'
                    });
            $('ul.nav > li').click(function (e) {
                e.preventDefault();
                var listnumber = $(this).index();
                //menu-actve-gray-color
                $('ul.nav > li').removeClass('active-menu-list');
                $('#main-menu > ul > li > a span').removeClass('menu-actve-gray-color');
                $('#main-menu > ul > li > a small').removeClass('menu-actve-gray-color');
                $('a.navbar-brand').removeClass('active-welcome');
                $('#welcome > a span').removeClass('menu-actve-gray-color');
                $('#welcome > a small').removeClass('menu-actve-gray-color');
                $(this).addClass('active-menu-list');
                $('#main-menu > ul > li:eq(' + listnumber + ')> a span').addClass('menu-actve-gray-color');
                $('#main-menu > ul > li:eq(' + listnumber + ')> a small').addClass('menu-actve-gray-color');
                ;
            });
            if ($('a.navbar-brand').click(function (e) {
                e.preventDefault();
                $('ul.nav > li').removeClass('active-menu-list');
                $('a.navbar-brand').addClass('active-welcome');
                $('#main-menu > ul > li > a span').removeClass('menu-actve-gray-color');
                $('#main-menu > ul > li > a small').removeClass('menu-actve-gray-color');
                $('#welcome > a span').addClass('menu-actve-gray-color');
                $('#welcome > a small').addClass('menu-actve-gray-color');
                //alert('Welcome');
            }))
                ;
            ///alert('SCW:/'+windowsize); 
            $('.alternated-menu').hide();
           
        }
         if(windowsize === 993)
            {
                ///alert(windowsize);
                $('.carousel-indicators li, .carousel-indicators .active').css('width','153px');
            }
             if(windowsize > 1024)
            {
                
                $('.carousel-indicators li, .carousel-indicators .active').css('width','184px');
            }
            //alert(windowsize);
        if (windowsize < 768) {
            if ($(buttonColepsed).is(":visible"))
            {
                //alert('show div');
                $('ul.nav-menu-control > li').removeClass('active');
                $('.main-menu-list').addClass('width30');
                $('.alter-menu-list').addClass('width50');
                $('.main-menu-list-brand').hide();
                $('.alternated-menu').show();
                $('a.navbar-brand').addClass('active-welcome');
                $('#welcome > a span').addClass('menu-actve-gray-color');
                $('#welcome > a small').addClass('menu-actve-gray-color');
                // if($())
            }
            else {
                $('.main-menu-list').removeClass('width30');
                $('.alter-menu-list').removeClass('width50');
                $('.main-menu-list-brand').show();
                $('.alternated-menu').hide();
            }
            
        }
    }
    //
    checkWidth();
    //
    $(window).bind('resize', function () {
        checkWidth();
    });
});
// used ModalPopover
!function ($) {

    /* MODAL POPOVER PUBLIC CLASS DEFINITION
     * =============================== */
    var ModalPopover = function (element, options) {
        this.options = options;
        this.$element = $(element)
                .delegate('[data-dismiss="modal-popup"]', 'click.dismiss.modal-popup', $.proxy(this.hide, this));
        this.options.remote && this.$element.find('.popover-content').load(this.options.remote);
        this.$parent = options.$parent; // todo make sure parent is specified
    }
    /* NOTE: MODAL POPOVER EXTENDS BOOTSTRAP-MODAL.js
     ========================================== */
    ModalPopover.prototype = $.extend({}, $.fn.modal.Constructor.prototype, {
        constructor: ModalPopover,
        getPosition: function () {
            var $element = this.$parent;
            return $.extend({}, ($element.offset()), {
                width: $element[0].offsetWidth, height: $element[0].offsetHeight
            });
        },
        show: function () {
            var $dialog = this.$element;
            $dialog.css({top: 0, left: 0, display: 'block', 'z-index': 1050});
            var placement = typeof this.options.placement == 'function' ?
                    this.options.placement.call(this, $tip[0], this.$element[0]) :
                    this.options.placement;
            var pos = this.getPosition();
            var actualWidth = $dialog[0].offsetWidth;
            var actualHeight = $dialog[0].offsetHeight;
            var tp;
            switch (placement) {
                case 'bottom':
                    tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
                    break;
                case 'top':
                    tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
                    break;
                case 'left':
                    tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
                    break;
                case 'right':
                    tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
                    break;
            }
            $dialog
                    .css(tp)
                    .addClass(placement)
                    .addClass('in');
            $.fn.modal.Constructor.prototype.show.call(this, arguments); // super
        },
        /** todo entire function was copied just to set the background to 'none'.  need a better way */
        backdrop: function (callback) {
            var that = this
                    , animate = this.$element.hasClass('fade') ? 'fade' : ''
            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate

                this.$backdrop = $('<div class="modal-backdrop ' + animate + '" style="background:none" />')
                        .appendTo(document.body)

                if (this.options.backdrop != 'static') {
                    this.$backdrop.click($.proxy(this.hide, this))
                }

                if (doAnimate)
                    this.$backdrop[0].offsetWidth // force reflow

                this.$backdrop.addClass('in')

                doAnimate ?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass('in')

                $.support.transition && this.$element.hasClass('fade') ?
                        this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
                        this.removeBackdrop()

            } else if (callback) {
                callback()
            }
        }
    });
    /* MODAL POPOVER PLUGIN DEFINITION
     * ======================= */
    $.fn.modalPopover = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('modal-popover');
            var options = $.extend({}, $.fn.modalPopover.defaults, $this.data(), typeof option == 'object' && option);
            // todo need to replace 'parent' with 'target'
            options['$parent'] = (data && data.$parent) || option.$parent || $(options.target);

            if (!data)
                $this.data('modal-popover', (data = new ModalPopover(this, options)))

            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.modalPopover.Constructor = ModalPopover
    $.fn.modalPopover.defaults = $.extend({}, $.fn.modal.defaults, {
        placement: 'right',
        keyboard: true
    });
    $(function () {
        $('.alter-menu-list').on('click.modal-popover.data-api', '[data-toggle="modal-popover"]', function (e) {
            var $this = $(this);
            var href = $this.attr('href');
            var $dialog = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); //strip for ie7
            var option = $dialog.data('modal-popover') ? 'toggle' : $.extend({remote: !/#/.test(href) && href}, $dialog.data(), $this.data());
            option['$parent'] = $this;

            e.preventDefault();

            $dialog
                    .modalPopover(option)
                    .modalPopover('show')
                    .one('hide', function () {
                        $this.focus()
                    })
        })
    })

}(window.jQuery);
//
$(function () {
    $('.open-search-box').bind('click', function (e) {
        e.preventDefault();
        $("#popupBottom").modalPopover('show');
    });
    $('#close-search-box').click(function (e) {
        e.preventDefault();
        $(".popover").hide();
    });
});
//
$(function () {
    //
    $(".quick-find-tag dt a").click(function () {
        $(".quick-find-tag dd ul").toggle();
        ///alert('here');
    });
    $(".quick-find-tag dd ul li a").click(function () {
        var text = $(this).html();
        $(".quick-find-tag dt a span").html(text);
        $(".quick-find-tag dd ul").hide();
       /// $("#result").html("Selected value is: " + getSelectedValue("by-tag-quick-find"));
    });
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }
    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("quick-find-tag"))
            $(".quick-find-tag dd ul").hide();
    });
});
//
$(function () {
    $(".quick-find-by-alpha dt a").click(function () {
        $(".quick-find-by-alpha dd ul").toggle();
    });
    $(".quick-find-by-alpha dd ul li a").click(function () {
        var text = $(this).html();
        $(".quick-find-by-alpha dt a span").html(text);
        $(".quick-find-by-alpha dd ul").hide();
       /// $("#result").html("Selected value is: " + getSelectedValue("by-alpha-quick-find"));
    });
    //
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }
    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("quick-find-by-alpha"))
            $(".quick-find-by-alpha dd ul").hide();
    });
});
// Carousel
$(function () {
    // $('#home-image-slide-modal-0').modalPopover('show');
    $('ol.carousel-indicators > li').bind(
            'click', function (e) {
                e.preventDefault();
                var index = $(this).index();//.attr('class','active');
                if ($(this).attr('class', 'active'))
                {
                    $('.idms-slide-popover').addClass('hide');
                    $('#home-image-slide-modal-' + index).removeClass('hide');
                }
            });
    $('.carousel > #idms-slide-left').bind(
            'click', function (e) {
                e.preventDefault();
                idmsCarouselSlideLeftButton();
                var index = $('ol.carousel-indicators > li').filter('.active').index();//.attr('class','active');
                // alert(index+'/here');
                $('.idms-slide-popover').addClass('hide');
                $('#home-image-slide-modal-' + index).removeClass('hide');
            });
    $('.carousel > #idms-slide-right').bind(
            'click', function (e) {
                e.preventDefault();
                idmsCarouselSliderighttButton();
                var index = $('ol.carousel-indicators > li').filter('.active').index();//.attr('class','active');
                $('.idms-slide-popover').addClass('hide');
                $('#home-image-slide-modal-' + index).removeClass('hide');
            });
    $('ul.carousel-inner > li').bind('click', function (e) {
        e.preventDefault();
        var listnumber = $(this).index();
        $('.idms-slide-popover').addClass('hide');
        $('#home-image-slide-modal-' + listnumber).removeClass('hide')
    });
    idmsCarousel();
    function idmsCarousel() {
        $('.carousel').carousel({
            interval: 3000,
            pause: 'hover',
            wrap: true
        });
    }
    function idmsCarouselSlideLeftButton() {
        $('.carousel').carousel('prev');
    }
    function idmsCarouselSliderighttButton() {
        $('.carousel').carousel('next');
    }
    $('.carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});
