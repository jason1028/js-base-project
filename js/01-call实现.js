var use_source = `
function test_fn(age) {
    console.log('name:', this.name);
    console.log('age:', age);
}
test_fn.call({name: 'jason'}, '20');
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "Call源码实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // call2
    Function.prototype.call2 = function(context, ...args) {
        // 保存当前对象，如果不存在则为window
        let _this = context || window;
        // 创建一个唯一值Symbol
        let current_fn = Symbol();
        // 当前对象挂载方法，this为当前调用的方法
        _this[current_fn] = this;
        // 执行并返回参数
        const res = args ? _this[current_fn](...args) : _this[current_fn]();
        // 释放内存空间，context
        delete _this[current_fn];
        // 返回结果
        return res;
    }
}(window);