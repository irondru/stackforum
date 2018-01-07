"use strict";

const fields_class = 'on_attachment';

function hasClass(elem, className) { // имеет ли класс элемент
    return elem.className.split(' ').indexOf(className) > -1;
}

//т.к. у нас множество динамически создающихся эл-ов с одними обработчиками - вешаем их глобально
// jQuery.on - не канает, другой варинант: експортировать функции и прописать их непоредственно html

document.addEventListener('change', function (e) {
    if (hasClass(e.target, fields_class)) { //
        if (e.target.oldvalue == '') { //новый аттач или изменяем?
            const target = jQuery(e.target); //dom to jquery
            const exp = /\d+/; //для получения числа из ид
            let new_field = target.clone();
            let name = new_field.attr('name');
            let id = new_field.attr('id');
            new_field.val('');
            new_field.attr('name', name.replace(exp, parseInt(name.match(exp)[0]) + 1).toString()); //inc number in name
            new_field.attr('id', id.replace(exp, parseInt(id.match(exp)[0]) + 1).toString());
            target.after(new_field);
            target.after('<a href="#'+id+'" class="on_remove_file_field_link">del</a>');
            e.target.oldvalue = target.value;
        }
    }
}, false);

document.addEventListener('click', function (e) {
    if (hasClass(e.target, fields_class)) {
        e.target.oldvalue = e.target.value; //запоминаем предидущее значение поля
    } else if (hasClass(e.target, 'on_remove_file_field_link')) {
        e.preventDefault(); //удаление поля и самой ссылки
        const target = jQuery(e.target);
        $(target.attr('href')).remove(); //в href ссылки ид поля
        target.remove();
    }
}, false);