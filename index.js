

const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters to name your logo',
            validate: function (inputText) {
                if (inputText.length > 3) {
                    console.log('Input should be no more than 3 characters.');
                    return false;

                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: `Please enter a color keyword (OR a hexadecimal number) for the text's color`,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What kind of shape would you like?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: `Please enter a color keyword (OR a hexadecimal number) for the shape's color`,
        }, 
    ])
        .then((data) => {
            switch (data.shape) {
                case 'Circle':
                    return choosenShape = new Circle(data.shape, data.shapeColor, data.textColor, data.text);
                    break;
                case 'Triangle':
                    return choosenShape = new Triangle(data.shape, data.shapeColor, data.textColor, data.text);
                    break;
                case 'Square':
                    return choosenShape = new Square(data.shape, data.shapeColor, data.textColor, data.text);
                    break;
                default: `Not a valid image.`;
                    break;


            }


        })
        .then((shape) => {
            fs.writeFile(`./examples/${shape.text}.svg`,
            shape.render(), err => {
                err ? console.log('Something wrong happens!') : console.log('File is created!');

            })

        })
        .catch (err => console.log('catch error: ' + err));







