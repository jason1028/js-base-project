var use_source = `
function test_fn(age) {
    console.log('name:', this.name);
    console.log('age:', age);
}
var bind_fn = test_fn.bind({name: 'jason'});
bind_fn(20);
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "bind源码实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // bind实现
    Function.prototype.bind2 = function(context) {
        const _ctx = context || window;
        const fn_key = Symbol();
        _ctx[fn_key] = this;
        return function() {
            const args = [...arguments];
            const res = args.length ? _ctx[fn_key](...args) : _ctx[fn_key]();
            delete _ctx[fn_key];
            return res;
        }
    }
}(window);