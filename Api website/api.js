let maxpoke = 40;
let pokemonlist = [];
let num;
window.onload = async function(){
    
for(let i = 1; i <= maxpoke; i++){
    await pokefetch(i);
    let pokemon = document.createElement("div");
    pokemon.id = i;
    pokemon.innerHTML = `
    
    <li class = "child">
        <img alt="pokemon img ${pokemon.id}" src ="${pokemonlist[i]["image"]}">
        <h1>Name: ${pokemonlist[i]["name"]}</h1>
        <h3>Type: ${pokemonlist[i]["type"]}</h3>
        <p>Description: ${pokemonlist[i]["desc"]}</p>
    </li>
    
    `
    document.getElementById("pokemon-list").append(pokemon);

}




console.log(pokemonlist);
}




/* poke api fetch this part works */
async function pokefetch(num){

    let url = "https://pokeapi.co/api/v2/pokemon/"+ num.toString();
    const res = await fetch (url);
    const data = await res.json();
    console.log(data); 

    let name = data["name"];
    let type = data["types"][0]["type"]["name"];
    let img = data["sprites"]["front_default"];


    let resa = await fetch(data["species"]["url"]);
    let datadec = await resa.json();
     
    /*console.log(datadec); */
    let description = datadec["flavor_text_entries"][9]["flavor_text"];

    pokemonlist[num] = {"name" : name, "image" : img, "type" : type, "desc" : description };
}


pokefetch();


function display(){
    
}
display();