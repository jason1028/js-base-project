var use_source = `
// instansof
function _instansof(obj_a, obj_b) {
    var result = false;
    var left = obj_a.__proto__;
    var right = obj_b.prototype;
    function dns(a_protype) {
        if(a_protype === null) { 
            result = false;
        } else if(a_protype === right) { 
            result = true; 
        } else {
            dns(a_protype.__proto__);
        }
    }
    dns(left);
    return result;
}
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "instansof 实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    // instansof
    function _instansof(obj_a, obj_b) {
        var result = false;
        var left = obj_a.__proto__;
        var right = obj_b.prototype;
        function dns(a_protype) {
            if(a_protype === null) { 
                result = false;
            } else if(a_protype === right) { 
                result = true; 
            } else {
                dns(a_protype.__proto__);
            }
        }
        dns(left);
        return result;
    }
    _window._instansof = _instansof;
}(window);