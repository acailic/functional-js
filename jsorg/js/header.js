// put event handlers for header links here
$(document).ready(function() {
    var $model = $("[rel='js-header']");
    $("[rel='js-header']").on("click","[rel*='js-']", function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        var url = $(evt.target).attr("href");
        $.ajax(url, {dataType: "text"})
        .then(function(contents) {
            $modal.html(contents).show();
        });
    });
});