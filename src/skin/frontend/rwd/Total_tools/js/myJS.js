/**
 * Created by datpham on 07/25/2017.
 */
var j=jQuery.noConflict();
j(document).ready(function()
{
    //todo:this for header and footer

    j(" .Total-tools-footer div.Total-tools-links .Total-tools-block-title ").click(function()
    {
        var $arrow= j(this).find("i");
        j("ul.Total-tools-links-ul").slideToggle("slow",function()
        {
            $arrow.toggle();
        });


    });
    j(" .Total-tools-footer div.links .block-title ").click(function()
    { var $arrow= j(this).find("i");
        j(".links ul").slideToggle("slow",function()
        {
            $arrow.toggle();
        });
    });
    j("#search-symbol-for-mobile").click(function()
        {
            j(".divine-child-2,#Total-tools-search").toggle();
        }
    );
    //todo:this for check out page
    j(document).find(".Total-tools-page2-co,.Total-tools-progress-step-1-done,.Total-tools-progress-step-2-done,.Total-tools-review-information").hide();
    j("button.button-swicht-page-check-out").click(function(event)
    {
        event.preventDefault();
        if(!j('.t1.validate-email.required-entry').val())
        {
            alert('Cannot work with empty email');
            return false;
        }
        if(!j('.t1.required-entry').val())
        {
            alert('something empty');
            return false;
        }
        if(!j('.t1.input-text.required-entry').val())
        {
            alert('something empty');
            return false;
        }
        if(!j('.validate-alpha.t1.required-entry').val())
        {
            alert('something empty');
            return false;
        }
        if(!j('.validate-alpha.t1').val())
        {
            alert('something empty');
            return false;
        }
        if(!j('.validate-select').val())
        {
            alert('something empty');
            return false;
        }
        if(!j('.t1.validate-zip-international.required-entry ').val())
        {
            alert('something empty ');
            return false;
        }
        if(!j('.t1.required-entry.validate-number ').val())
        {
            alert('something empty ');
            return false;
        }
        j(document).find("div.col-1,div.col-2,.button-swicht-page-check-out,.Total-tools-progress-step-1,.Total-tools-progress-step-2").hide();
        j(".Total-tools-page2-co,.Total-tools-progress-step-1-done,.Total-tools-progress-step-2-done,.Total-tools-review-information").show();

    });
    //todo toggle for check out
    j("#Total-tools-discount-title  ").on("click",function()
    {
        var $arrow= j(this).find("i");
        j("#checkout-coupon-discount-load").slideToggle("slow",function()
        {
            $arrow.toggle();
        });

    });
    j("#Total-tools-insider-title").click(function ()
    {
        var $arrow= j(this).find("i");
        j("#insider-point").slideToggle("slow",function()
        {
            $arrow.toggle();
        });
    });
    j("#Total-tools-gift-card").click(function ()
    {
        var $arrow= j(this).find("i");
        j("#applying-gift-card").slideToggle("slow",function()
        {
            $arrow.toggle();
        })
    });
    j("#all-products-title").click(function ()
    {
        var $arrow= j(this).find("i");
        j("#Total-tools-items-in-cart").slideToggle("slow",function()
        {
            $arrow.toggle();
        })
    })


});


