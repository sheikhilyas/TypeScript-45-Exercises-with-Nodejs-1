// Creating a function with parameter which return a value in string:
function city_country(city:string, country: string) : string{
    return `${city},${country}`;
}

// Calling a function and print the returned value:
console.log(city_country("Karachi","Pakistan"));

console.log(city_country("Tokyo","Japan"));

console.log(city_country("Berlin","Germany"));