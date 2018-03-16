function new_comment(refer) {
    del_excess_forms();
    refer = jQuery(refer);
    var divid = refer.attr('data');
    $(divid).append(
        $('#comment-form-tmpl').tmpl({action: refer.attr('href'), method: 'post'})
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
        $('#comment-form-tmpl').tmpl({action: refer.attr('href'), value: comment_body.text(), method: 'patch'})
    );
    return false;
}