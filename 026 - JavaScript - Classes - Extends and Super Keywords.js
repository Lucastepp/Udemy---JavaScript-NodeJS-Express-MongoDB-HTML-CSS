







class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    meow() {
        return 'MEOWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }
}

//super keyword

class Bird extends Pet {
    constructor(name, age, lives = 3) {
        super(name, age);
        this.lives = lives;
    }
    sing() {
        return 'Peow peow';
    }
}