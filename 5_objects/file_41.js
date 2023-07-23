// object destructuring

const band = {
    bandName: "Linkin Park",
    famousSong: "Numb",
    year: 1996,
    anotherFamousSong: "In the end",
}

// const var1 = band.bandName;
// const famousSong = band.famousSong;

// console.log(var1, famousSong);

//or

// let {bandName, famousSong} = band;
//this is called object destructuring and it is used to extract data from objects
// bandName = "Green Day";
// we can change the value of bandName but it will not change the value of band.bandName
// console.log(bandName, famousSong)

let {bandName: naam, famousSong: song, ...restProps} = band;
// this will change the name of bandName to naam and famousSong to song and store values of bandName and famousSong in naam and song

console.log(naam, song, restProps);