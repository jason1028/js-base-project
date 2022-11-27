var use_source = `
function test_fn(age) {
    console.log('name:', this.name);
    console.log('age:', age);
}
test_fn.apply({name: 'jason'}, [20]);
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "apply源码实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // Apply实现
    Function.prototype.apply2 = function(context, args) {
        var _ctx = context || window;
        var fn_key = Symbol();
        _ctx[fn_key] = this;
        var res = args.length ? _ctx[fn_key](...args) : _ctx[fn_key]();
        delete _ctx[fn_key];
        return res;
    }
}(window);