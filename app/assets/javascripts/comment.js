function new_comment(obj) {
    obj = jQuery(obj);
    var divid = 'div#answer-comment-' + obj.attr('data');
    $(divid).html(
        JST["templates/comment"]({action: obj.attr('href'), id: divid})
    );
    return false;
}