function add_attachment(obj) {
    if (obj.oldvalue == '') {
        const exp = /\d+/;
        var _obj = jQuery(obj);
        var newobj = _obj.clone();
        var name = newobj.attr('name');
        var id = newobj.attr('id');
        newobj.val('');
        newobj.attr('name', name.replace(exp, parseInt(name.match(exp)[0]) + 1).toString());
        newobj.attr('id', id.replace(exp, parseInt(id.match(exp)[0]) + 1).toString());
        _obj.after(newobj);
        _obj.after('<a href="#'+id+'" onclick="return del_attachment(this)">del</a>');
    }
}

function del_attachment(obj) {
  $(jQuery(obj).attr('href')).remove();
  obj.remove();
  return false;
}