// object property shorthand


const name = 'Chris';
const userAge = 30;


const user = {
	name,
	age: userAge,
	location: 'Manchester'
};

console.log(user);

// Object destructuring

const product = {
	label: 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 25
};

//Defaults can be set in here
// variables can be renamed in here
const {label:productLabel, stock, rating = 5} = product;

console.log(productLabel, stock, rating);


const transaction = (type, {label, stock}) => {
	console.log(type);
	console.log(label);
	console.log(stock);
};

transaction('order', product);