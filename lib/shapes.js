class Shape {
    constructor(shape, shapeColor, textColor, text) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    
};

class Triangle  extends Shape {
    constructor(shape, shapeColor, textColor, text) {
        super(shape, shapeColor, textColor, text);
    }
    
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" 
        fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`
    }
};

class Circle extends Shape {
    constructor(shape, shapeColor, textColor, text) {
        super(shape, shapeColor, textColor, text);
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
        <circle cx="150" cy="105" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        `
    }

};

class Square extends Shape {

    constructor(shape, shapeColor, textColor, text) {
        super(shape, shapeColor, textColor, text);
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xlmns="https://www.w3.org/2000/svg">
    <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        
        `
    }
        
};



// function generateshapes(data) {
//     return `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <${data.shape} cx="150" cy="100" r="80" fill="${data.shape-color}" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text-color}">${data.text}</text>

// </svg>`;

// }

module.exports = {Triangle, Circle, Square};