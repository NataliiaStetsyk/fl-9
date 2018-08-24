function findType(value) {
let dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
const x0 = 0;    
if (typeof value === 'object' || typeof value === 'function') {
     for (x = x0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}

function forEach(array, fn) {
    if(array && fn){
		for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
    }
}

Array.prototype.map = function(callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
arr.push(callback(this[i], i, this)); 
}
    return arr;
};

/*var arrs = [2, 5, 8]; var test = arrs.map(function(el) {
    return el+3;
}); console.log(test);*/

Array.prototype.filter = function(callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
 arr.push(this[i]);
}
    }
    return arr;
};

/*var arrs = [2, 5, 8]; var test = arrs.filter(function(el) {
    return el>3;
}); console.log(test);*/


function getAdultAppleLovers(data) {
		
let newArray = data.filter(function (el) {
  return el.age > 18 && el.favoriteFruit === 'apple';
});


let newName = newArray.map(function(el){
    return el.name;
});

return newName;

}

function keys(obj) {
  let result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
 return result;
}


function values(obj) {
	
let result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {         
                result.push(obj[prop]);
        }
      }
 return result;
}

function showFormattedDate(date) {
  let monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return 'It is' + ' ' + day + ' ' + 'of' + ' ' + monthNames[monthIndex] + ',' + ' ' + year;
}