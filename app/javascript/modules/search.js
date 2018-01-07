function set_query_param() {
    var result = 0;
    $('.search-checkbox').toArray().forEach(function(elem) {
        if (elem.checked) result += parseInt(elem.value);
    });
    $('#query_params').val(result);
    return result > 0;
}