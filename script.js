
fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => response.json() ).then(user => 
{
  const count=user.count;
  console.log(count);

  fetchKantoPokemon();

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+count)
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
  })
}
function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch.
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}
function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('myMenu');
    let poke = document.createElement('li')

    let pokeName = document.createElement('a')
    pokeName.innerText = pokeData.name
    poke.append(pokeName);
   allPokemonContainer.append(poke);
}
});
function mySearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myF");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
