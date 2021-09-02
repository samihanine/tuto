```js
class Animal {

    static data = [];

    constructor(settings) {
        this._name = settings.name.trim() || "unknown";

        Animal.data.push(this);
    }

    static get number_of_animals() {
        return Animal.data.length;
    }

    static remove(animal) {
        Animal.data = Animal.data.filter(item => item != animal);
    }
    
    get name() {
        return this._name.toUpperCase();
    }

    set name(name) {
        this._name = name;
    }

    act() {
        console.log(`${this.name} performs an action.\n`)
    }

}

class Cat extends Animal {

    constructor(settings) {
        super(settings);
        this._speed = settings.speed || 1;
    }

    get speed() {
        return this._speed;
    }

    eat(animal) {
        super.act();

        if (animal.visible && this.speed > 0.5) {
            Animal.remove(animal);
            console.log(`${animal.name} was eaten by ${this.name}.\n`);
        } else {
            console.log(`${this.name} could not eat ${animal.name} because it was hidden.\n`);
        }
    }

}

class Mouse extends Animal {

    constructor(settings) {
        super(settings);
        settings = settings || {};

        this._visible = settings.visible || false;
    }

    get visible() {
        return this._visible;
    }

    set visible(visible) {
        this._visible = visible;
    }

    hide() {
        super.act();
        let int = Math.floor(Math.random() * 2)
        this.visible = (int == 1);
    }

}

const mouse1 = new Mouse({ name: "mickey" });

const cat1 = new Cat({ name: "garfield", speed: 2 });

Animal.data.forEach(item => {
    if (item instanceof Mouse) item.hide();
})

cat1.eat(mouse1);

console.log(`Number of animals remaining : ${Animal.number_of_animals}.`);
```