let maxpoke = 42;
let pokemonlist = [];
let num;

/* poke api fetch this part works */
async function fetch(){

    let url = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const res = await fetch (url);
    const data = await res.json();
     console.log(data); 



}



fetch();

