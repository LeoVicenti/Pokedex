var quantidade = document.getElementById('quantidade');
    quantidade.addEventListener('keyup',()=>{
        pegaPokemons(quantidade.value);

    })
pegaPokemons(3);

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?offset=12&limit='+quantidade)
.then(response => response.json())
.then(allpokemon => {
    
    var pokemons = [];
    allpokemon.results.map((val)=>{
        


    fetch(val.url)
    .then(response => response.json())
    .then(pokemonSingle => {
        pokemons.push({nome:val.name, imagem: pokemonSingle.sprites.front_default});
        
    
            if(pokemons.length == quantidade){
                var pokemonsCards = document.querySelector('.pokemonsCards');
                pokemonsCards.innerHTML = "";
                //console.log(pokemons)
                pokemons.map((val)=>{
                    pokemonsCards.innerHTML+=`
                    
                    <div class="pokemon-Card">
                    <img src="`+val.imagem+`">
                    <p>`+val.nome+`</p>
                </div>
                
                `;



                   
                })

            }
    })
    })

})
}