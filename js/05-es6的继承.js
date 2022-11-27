var use_source = `
class Person {
    constructor(obj) {
        const {name, age} = obj;
        this.name = name;
        this.age = age;
    }

    add(value) {
        console.log('add:', value);
    }
}

class Person1 extends Person {
    constructor(obj) {
        super(obj);
        const { sex } = obj;
        this.sex = sex;
    }

    play() {
        console.log('play...');
    }
}
`;

!function(_window) {
    document.querySelector('#show_title_h1').innerHTML = "ES6的继承";
    document.querySelector('#script_use_source').innerHTML = use_source.toString();

    class Person {
        constructor(obj) {
            const {name, age} = obj;
            this.name = name;
            this.age = age;
        }

        add(value) {
            console.log('add:', value);
        }
    }

    class Person1 extends Person {
        constructor(obj) {
            super(obj);
            const { sex } = obj;
            this.sex = sex;
        }

        play() {
            console.log('play...');
        }
    }

    _window.person_01 = new Person1({name: 'jason', age: 20, sex: 'boy'});

}(window);