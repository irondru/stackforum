// после хождения по ссылкам появляются дубликаты канала, турболинкс мля - удаляем (каналы)
function clear_subscriptions() {
    App.cable.subscriptions['subscriptions'].forEach(function (elem) {
        App.cable.subscriptions.remove(elem);
    });
}

function del_excess_forms(){
    ['div.comment-body:hidden', 'div.answer-body:hidden',
        'div.comment-form', 'div.answer-form'].forEach(function (id) {
        $(id).toArray().forEach(function(elem) {
            elem = jQuery(elem);
            id.indexOf('form') > 0 ? elem.remove() : elem.show();
        });
    });
}