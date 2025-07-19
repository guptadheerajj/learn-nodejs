const myUrl = new URL(
	"https://example.com:8000/hello.html?name=dheeraj&pass=1234&key=dh12"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Host name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("country", "india");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`);
});
