$j = jQuery.noConflict();

$j(document).ready(function(){
    $j('.rating-input input').click(
        function () {
            $j(this).parent().prevAll().andSelf().addClass('full-star');
            $j(this).parent().nextAll().removeClass('full-star');
        }
    );
});