let price = parseFloat(prompt('How much money do you have?'));
let discount = parseFloat(prompt('What is discount?'));

if (price < 0 || discount < 0 || isNaN(price) || isNaN(discount)) {

    console.log('Invalid data');
} else {
        let pricDisc = price * discount/100;
        let saved = price - pricDisc;
        pricDisc = parseFloat(pricDisc.toFixed(2));
		saved = parseFloat(saved.toFixed(2));
		
        console.log('Price: ' + price + ' Disc: ' + discount + '%' + ' With disc: ' + pricDisc + ' Saved: ' + saved);
        }
		


   
