var use_source = `
// new源码实现
function _new(c_fn, ...args) {
    if(typeof c_fn !== 'function') {
        throw new Error('First param must be a function');
    }
    var new_obj = Object.create(c_fn.prototype);
    var _ret = c_fn.apply(new_obj, args);
    if(typeof _ret === 'object' || typeof _ret === 'function') {
        return _ret;
    }
    return new_obj;
}
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "New 关键字实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // new源码实现
    function _new(c_fn, ...args) {
        if(typeof c_fn !== 'function') {
            throw new Error('First param must be a function');
        }
        var new_obj = Object.create(c_fn.prototype);
        var _ret = c_fn.apply(new_obj, args);
        if(typeof _ret === 'object' || typeof _ret === 'function') {
            return _ret;
        }
        return new_obj;
    }

    _window._new = _new;
}(window);