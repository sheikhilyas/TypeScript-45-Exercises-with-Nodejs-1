// Define the make_album function:
function make_album(artist_name: string,album_title:string,tracks?: number){
    let album:{artist: string,title: string,tracks?: number} = {
        artist:artist_name,
        title: album_title,
    };
if(tracks!== undefined){
    album.tracks = tracks;
}
return album;
}

// Calling three function and creating 3 variable with different value:
let album1 = make_album("Ilyas","Album title 1");
let album2 = make_album("Sunny","Album title 2");

// Calling a make_album function with third parameter:
let album3 = make_album("Usman","Album title 3",10);


// Print value of our object created my function:
console.log(album1);
console.log(album2);
console.log(album3);