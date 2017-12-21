function edit_answer(refer) {
    del_excess_forms();
    refer = jQuery(refer);
    var id = refer.attr('data');
    var answer_body = $('div#answer-' + id + ' > div.answer-body');
    answer_body.hide();
    answer_body.after(
        JST["templates/answer_form"]({action: refer.attr('href'), value: answer_body.text()})
    );
    return false;
}