function new_comment(obj) {
    $('div.new-comments').toArray().forEach(function (elem) {
        elem.innerHTML = '';
    });

    obj = jQuery(obj);
    var divid = obj.attr('data');
    $(divid).html(
        JST["templates/new_comment"]({action: obj.attr('href'), id: divid})
    );
    return false;
}