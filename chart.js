
/*
const FirstWords = ["Tech", "Innovative", "Smart", "Green", "Next", "Bright",
    "Sustainable","Rapid", "Future", "Digital"];
const SecondWords = ["Visionary", "Solutions", "Systems", "Functions", "Dynamics",
    "Hub", "Network", "Innovations", "Labs", "Path"];

function StartupName (a,b){
    let randomNumberFromA = Math.floor(Math.random() * a.length)
    let randomNumberFromB = Math.floor(Math.random() * b.length)
    let randomElement = "This could be your new startup name: " + a [randomNumberFromA] + " " + b[randomNumberFromB] + "!";
    console.log(randomElement);
}

StartupName(FirstWords, SecondWords);
StartupName(FirstWords, SecondWords);
StartupName(FirstWords, SecondWords);

*/




const addSong = document.querySelector("#songButton")
const textElement = document.querySelector("#textHere")
addSong.addEventListener("click", function(){

    const songSelector =["Inject The Venom by AC/DC", "Evil Walks by AC/DC", "Enter Sandman by Apocalyptica","Master Of Puppets by Apocalyptica",
        "Harvester Of Sorrow by Apocalyptica","Tomorrow's Dream by Black Sabbath", "Cornucopia by Black Sabbath", "First Time I Met The Blues by Buddy Guy",
        "Leave My Girl Alone by Buddy Guy", "Talkin' 'Bout Women Obviously by Buddy Guy", "A Sombra Da Maldade by Cidade Negra", "Pensamento by Cidade Negra",
        "Daniela by Various Artists", "My Love by Various Artists","Hammer To Fall by Queen", "The Show Must Go On by Queen",
        "I Was Made For Loving You by Kiss", "God Of Thunder by Kiss", "Shout It Out Loud by Kiss", "Hitchin' A Ride by Green Day",
        "Nice Guys Finish Last by Green Day", "Um Love by Ed Motta", "Samba Da Volta by Toquinho & Vinícius", "Deixa by Toquinho & Vinícius",
        "Lady Luck by Deep Purple", "Love Child by Deep Purple", "Child In Time by Deep Purple", "Fireball by Deep Purple", "Anyone's Daughter by Deep Purple",
        "No One Came by Deep Purple"];

    const randomSong = Math.floor(Math.random() * songSelector.length);
    let songText = songSelector[randomSong];

    textElement.innerText = songText;
});

/*   Jeg lavede en div hvor jeg har smidt knappen ind.
div clas "container"
<p> id "textHere"
knap id "songButton"

<div class = "container">
    <p id="textHere">Where magic happens</p>
    <button id="songButton" class="RandomSong" onclick="randomSong">Click me</button>
</div>
 */