var use_source = `
function assign2(target, ...source_objs) {
    if(target === null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    var ret = Object(target);
    source_objs.forEach(obj => {
        if(obj) {
            for(var key in obj) {
                // 关键部分
                if(obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
        }
    });
    return ret;
}
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "assign实现";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    function assign2(target, ...source_objs) {
        if(target === null) {
            throw new TypeError('Cannot convert undefined or null to object')
        }
        var ret = Object(target);
        source_objs.forEach(obj => {
            if(obj) {
                for(var key in obj) {
                    if(obj.hasOwnProperty(key)) {
                        ret[key] = obj[key];
                    }
                }
            }
        });
        return ret;
    }

    console.log(assign2({a: 1, b: 2}, {a: 2, bb: 3}, {c: 4, d: 5}));
}(window);