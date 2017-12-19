function new_comment(obj) {
    obj = jQuery(obj);
    var divid = obj.attr('data');
    $(divid).html(
        JST["templates/new_comment"]({action: obj.attr('href'), id: divid})
    );
    return false;
}