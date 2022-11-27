var use_source = `
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
}
Person.prototype.add = function(value) {
    console.log('结果：', value);
}

function Person1(obj) {
    Person.call(this, obj);
    this.sex = obj.sex;
}
Person1.prototype = Object.create(Person.prototype);
Person1.prototype.constructor = Person1;
Person1.prototype.paly = function() {
    console.log('play');
}

var person_01 = new Person1({name: 'jason', age: 20, sex: 'boy'});
console.log(person_01);
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "寄生式组合继承";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    function Person(obj) {
        this.name = obj.name;
        this.age = obj.age;
    }

    Person.prototype.add = function(value) {
        console.log('结果：', value);
    }

    function Person1(obj) {
        Person.call(this, obj);
        this.sex = obj.sex;
    }

    Person1.prototype = Object.create(Person.prototype);
    Person1.prototype.constructor = Person1;

    Person1.prototype.paly = function() {
        console.log('play');
    }

    _window.person_01 = new Person1({name: 'jason', age: 20, sex: 'boy'});
    console.log(person_01);
}(window);