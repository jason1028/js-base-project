var use_source = `
// object create 01
function create2(obj) {
    var new_obj = {};
    var obj_proto = new_obj.__proto__;
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        for(var item_key in obj) {
            obj_proto[item_key] = obj[item_key];
        }
        return new_obj;
    } else {
        throw new Error('Please entry object.');
    }
}

// object create 02
function create3(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        function F() {}
        F.prototype = obj;
        return new F();
    } else {
        throw new Error('Object prototype may only be an Object:');
    }
}
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // object create 01
    function create2(obj) {
        var new_obj = {};
        var obj_proto = new_obj.__proto__;
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            for(var item_key in obj) {
                obj_proto[item_key] = obj[item_key];
            }
            return new_obj;
        } else {
            throw new Error('Please entry object.');
        }
    }

    // object create 02
    function create3(obj) {
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            function F() {}
            F.prototype = obj;
            return new F();
        } else {
            throw new Error('Object prototype may only be an Object:');
        }
    }

    _window['create2'] = create2;
    _window['create3'] = create3;
}(window);