  
let actors =loadFromDatabase('actor');  //objekat sa svim glumcima po Id-u

let createActor = function (actorId,name,lastName,bio,birthDate,movieId) {
    if(!actors[actorId])
    { 
        actors[actorId]=
        {
        name:name,
        lastName:lastName,
        bio:bio,
        birthDate:birthDate,
        movies:movieId
        }
        return actors;
        
    }
    else
    {
        return document.getElementById("prompt").style.display="block";
    }
    
}();

// dodavanje glumca iz forme u localStorage
document.getElementById("create").addEventListener("submit",addActorToLocalStroge());


let addActorToLocalStroge = function (e) {
    e.preventDefault();
    let actorId = document.getElementById("idCreate").value;
    let name = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let bio = document.getElementById("bio").value;
    let birthDate = document.getElementById("birthDate").value;
    console.log(birthDate.value);
    createActor(actorId, name, lastName, bio, birthDate);
    saveToDatabase('actor', actors);
    document.contact - form.reset(); //resetovanje forme
}

//ovo su 4 nova glumca
/*
createActor("abc123","Pera","Peric","Ziveo i radio u nekom gradu bla bla",1988, [1,2,3,4]);
createActor("abc111","ana","alic","Ziveo i radio u nekom gradu bla bla",1990, [17,25,37,47]);
createActor("abc222","sara","saric","Ziveo i radio u nekom gradu bla bla",1889, [1,26,8,0]);
createActor("aaa111","Marko","Markovic","",1999,[12,34,]);           
*/
//ovaj glumac ima isti Id kao pera i zato ne moze da se kreira
//createActor("abc123","aaa","cccc","Ziveo i radio u nekom gradu bla bla",1988, [1,2,3,4]);

let updateActor= function (actorId,key)
{
    actors[actorId][key]=localStorage.getItem(key);

}();
//  ovo ispod ubacuje biografiju gde je nije bilo
//updateActor("aaa111","bio","ko je on sta je radio");

let deleteActor = function (actorId) 
{
    delete actors[actorId];
}();

// ovo ispod brise saru iz actors
//deleteActor("abc222");

//ovo ispod menja peru u petra po Id-u
//updateActor("abc123","name","Petar"); 

//Storing data:
let saveToDatabase = function (key,object)
{
    localStorage.setItem(key, JSON.stringify(object));   
}();
//saveToDatabase("actorsJSON",actors);

//Retrieving data:
let loadFromDatabase = function (key) {
    
    return JSON.parse(localStorage.getItem(key));
}();


//var myJSON = JSON.stringify(actors);
//localStorage.setItem("actorsJSON", myJSON);


//var text = localStorage.getItem("actorsJSON");
//obj = JSON.parse(text);
//document.getElementById("demo").innerHTML = obj.name;

// ---------------------------------------- METODE ZA RAD SA ZANROM I PROFILIMA --------------------------------------------------- //

let deleteGenre = function (){
    
}

let deleteProfile = function (){
    
}

