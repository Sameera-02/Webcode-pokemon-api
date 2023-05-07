// fetching api using async - await , with try - catch to handle errors

let pokeArray = [];

async function getPoke() {

try{

    for(let i=1;i<=50;i++){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let data = await response.json();
        pokeArray.push(data);
    }

// displaying 50 pokemons ; each with its abilities , moves and weights.



for(i=0 ; i<pokeArray.length ; i++)
{
    document.body.innerHTML += 
    `
      <div class="container">
    
      <img src= ${pokeArray[i].sprites.front_default} class=image >
    <div class= "info">
    <P> <span> Name : </span> ${pokeArray[i].name} </p>
    <p> <span> Abilities : </span> ${pokeArray[i].abilities[0].ability.name} </p>
    <p> <span> Moves : </span> ${pokeArray[i].moves[0].move.name} </p>
    <p> <span> Weight : </span>${pokeArray[i].weight} </p>
    </div>
    </div>
 `
}
}


catch(error) 
{
console.log(error)
}

}
 
getPoke();
