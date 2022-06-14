$(document).ready(function() {
    var $modal = $("[rel='js-modal']");
    //callback
    $("[rel='js-controls']")
    .on("click","[rel*='js-']", function(evt) {
        console.log("url started");
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var url = $(evt.target).attr("href");
        console.log("url: " + url);
        $.ajax(url, { dataType: "text"})
        .then(function(contents) {
            $modal.html(contents).show();
        });
    });
});