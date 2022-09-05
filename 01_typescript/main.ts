// Class

// Access Modifiers: Public, Protected, Private
// Properties: Getters, Setters
class Point { 
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    drawPoint = () => {
        console.log(`Draw a point at x: ${this._x} and y: ${this._y}`);   
    }

    get getX() {
        return this._x;
    }

    get getY() {
        return this._y;
    }

    set setX(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        } else {
            this._x = value;
        }
    }

    set setY(value: number) {
        this._y = value;
    }
}


let pointA: Point = new Point(2, 3);

pointA.drawPoint();

// getter
console.log(`Show point x: ${pointA.getX} and y: ${pointA.getY}`);

// setter
pointA.setX = -11;

