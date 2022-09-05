// Class
// Access Modifiers: Public, Protected, Private
// Properties: Getters, Setters
class Point {
    constructor(x, y) {
        this.drawPoint = () => {
            console.log(`Draw a point at x: ${this.x} and y: ${this.y}`);
        };
        this.x = x;
        this.y = y;
    }
    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    }
    set setX(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        else {
            this.x = value;
        }
    }
    set setY(value) {
        this.y = value;
    }
}
let pointA = new Point(2, 3);
pointA.drawPoint();
console.log(`Show point x: ${pointA.getX} and y: ${pointA.getY}`);
pointA.setX = 11;
