function new_comment(refer) {
    del_excess_forms();
    refer = jQuery(refer);
    var divid = refer.attr('data');
    $(divid).append(
        JST["templates/comment_form"]({action: refer.attr('href'), method: 'post'})
    );
    return false;
}

function edit_comment(refer) {
    del_excess_forms();
    refer = jQuery(refer);
    var id = refer.attr('data');
    var comment_body = $('div#comment-' + id + ' > div.comment-body');
    comment_body.hide();
    comment_body.after(
        JST["templates/comment_form"]({action: refer.attr('href'), value: comment_body.text(), method: 'patch'})
    );
    return false;
}