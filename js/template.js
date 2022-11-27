var use_source = `
function test_fn(age) {
    console.log('name:', this.name);
    console.log('age:', age);
}
test_fn.call({name: 'jason'}, '20');
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();
}(window);