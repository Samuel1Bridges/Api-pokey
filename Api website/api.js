/* poke api fetch this part works */
async function pokefetch(){
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    doStuff(data.results);
    // console.log(data.results);
}

pokefetch();

/*Display info on html working*/
function doStuff(data){
    for(const poke of data) {
        const myArticle = document.createElement("article");
        myArticle.innerHTML = `
            <h1>${poke.name}</h1>
        `; 
        const article = document.querySelector("article");
        article.appendChild(myArticle);
    }
    
}

