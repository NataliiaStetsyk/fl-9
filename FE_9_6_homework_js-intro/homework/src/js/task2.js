let side1 = parseFloat(prompt('What is the length of the 1st side?'));
let side2 = parseFloat(prompt('What is the length of the 2nd side?'));
let alfa = parseFloat(prompt('What is the angle in beetween?'));

if (side1 <= 0 || side2 <= 0 || isNaN(side1) || isNaN(side2) || isNaN(alfa)) {

    console.log('Invalid data');
} else {
        const convert = 0.017453292519943;
		let rad = alfa * convert;
		let side3 = Math.sqrt(Math.pow(side1, 2)+ Math.pow(side2, 2)-2*side1*side2*Math.cos(rad));
        let perimeter = side1 + side2 + side3;
		let semiperim = (side1 + side2 + side3)/2;
        let area = Math.sqrt(semiperim * ((semiperim - side1) * (semiperim - side2) * (semiperim - side3)));
        area = parseFloat(area.toFixed(2));
		perimeter = parseFloat(perimeter.toFixed(2));
		side3 = parseFloat(side3.toFixed(2));
        console.log('Third side is '+ side3 +' Perimeter is ' + perimeter + ' Area is ' + area);
        }

   