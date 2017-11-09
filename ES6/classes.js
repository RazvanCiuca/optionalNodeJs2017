class Rectangle {
    constructor(x, y) {
        this.width = x;
        this.height = y;
        this.myType = 'Rectangle'
    }

    getArea() {
        return this.width * this.height;
    }

    static whatAmI() {
        console.log(
`</enthusiasm>  
   I am  a type of polygon!
</enthusiasm>`
        );
    }

    whatAmIReally() {
        console.log(`I am actually a ${this.myType}`)
    }
}

class Square extends Rectangle {
    constructor(x) {
        super(x, x);
        this.myType = 'Square';
    }
}

let mySquare = new Square(5);
let myRectangle = new Rectangle(4, 6);

//console.log('My square\'s area: ', mySquare.getArea());
// console.log('My rectangle\'s area: ', myRectangle.getArea());
//Rectangle.whatAmI();
// mySquare.whatAmIReally();