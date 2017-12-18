// после хождения по ссылкам появляются дубликаты канала, турболинкс мля - удаляем (каналы)
function clear_subscriptions() {
    App.cable.subscriptions['subscriptions'].forEach(function (elem) {
        App.cable.subscriptions.remove(elem);
    });
}
