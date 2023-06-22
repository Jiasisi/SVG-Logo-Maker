// Each shape class should be tested for a render() method 
// that returns a string for the corresponding SVG file with the given shape color.
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const {Triangle, Circle, Square} = require('./shapes');

describe('Tests Triangle', () => {
    describe('Example of triangle', () => {
        it('is a example of the Triangle class', () => {
            const testedTriangle = new Triangle();
            expect(testedTriangle).toBeInstanceOf(Triangle);
        })
    });
    describe('Test the color of the shape', () => {
        it('the color of the shape should be blue', () => {
            const choosenColor = 'blue';
            const testedTriangle = new Triangle('triangle', choosenColor);
            expect(testedTriangle.shapeColor).toBe(choosenColor);
        })
    });
    describe('Test the color of the word', () => {
        it('the color of the shape should be white', () => {
            const choosenWordColor = 'white';
            const testedTriangle = new Triangle('triangle', 'blue', choosenWordColor);
            expect(testedTriangle.textColor).toBe(choosenWordColor);
        })
    });
    describe('Test the text', () => {
        it('the text of the logo should be SVG', () => {
            const logoText = 'SVG';
            const testedTriangle = new Triangle('triangle', 'blue', 'white', logoText);
            expect(testedTriangle.text).toBe(logoText);
        })
    });
})


describe('Tests Circle', () => {
    describe('Example of circle', () => {
        it('is a example of the Circle class', () => {
            const testedCircle = new Circle();
            expect(testedCircle).toBeInstanceOf(Circle);
        })
    });
    describe('Test the color of the shape', () => {
        it('the color of the shape should be blue', () => {
            const choosenColor = 'blue';
            const testedCircle = new Circle('circle', choosenColor);
            expect(testedCircle.shapeColor).toBe(choosenColor);
        })
    });
    describe('Test the color of the word', () => {
        it('the color of the shape should be white', () => {
            const choosenWordColor = 'white';
            const testedCircle = new Circle('circle', 'blue', choosenWordColor);
            expect(testedCircle.textColor).toBe(choosenWordColor);
        })
    });
    describe('Test the text', () => {
        it('the text of the logo should be SVG', () => {
            const logoText = 'SVG';
            const testedCircle = new Circle('circle', 'blue', 'white', logoText);
            expect(testedCircle.text).toBe(logoText);
        })
    });
})


describe('Tests Square', () => {
    describe('Example of square', () => {
        it('is a example of the Square class', () => {
            const testedSquare = new Square();
            expect(testedSquare).toBeInstanceOf(Square);
        })
    });
    describe('Test the color of the shape', () => {
        it('the color of the shape should be blue', () => {
            const choosenColor = 'blue';
            const testedSquare = new Square('square', choosenColor);
            expect(testedSquare.shapeColor).toBe(choosenColor);
        })
    });
    describe('Test the color of the word', () => {
        it('the color of the shape should be white', () => {
            const choosenWordColor = 'white';
            const testedSquare = new Square('square', 'blue', choosenWordColor);
            expect(testedSquare.textColor).toBe(choosenWordColor);
        })
    });
    describe('Test the text', () => {
        it('the text of the logo should be SVG', () => {
            const logoText = 'SVG';
            const testedSquare = new Square('square', 'blue', 'white', logoText);
            expect(testedSquare.text).toBe(logoText);
        })
    });
})




