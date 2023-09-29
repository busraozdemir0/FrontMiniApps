const poke_container=document.querySelector(".poke-container");
const search=document.querySelector(".search");
const searchBtn=document.querySelector(".searchBtn");
const searchInput=document.querySelector(".searchInput");

const pokemon_count=151;

const bg_color = {  // pokemonlarin arkaplan renklerini tuttuk
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
  }

  searchBtn.addEventListener("click", () => {
    search.classList.toggle("active");   // active classini toggle bir sekilde arama butonuna ekle
  })

  searchInput.addEventListener("input", (e) => {
    // console.log(searchInput.value)
    const searchValue=searchInput.value.toLowerCase();  // input'a girilen degeri kucuk harfler biciminde alalim
    const pokemonNames=document.querySelectorAll(".poke-name");  // pokemonlarin isimlerini cektik
  
    pokemonNames.forEach((pokemonName) => {
        if(pokemonName.innerHTML.toLowerCase().includes(searchValue)){ // arama kismina yazilan pokemonName ile eslesen karti gosteriyoruz
            pokemonName.parentElement.parentElement.style.display="block";  // .poke-name classindan iki parent ustune cikip pokemon divine ulasiyoruz
        } else{
            pokemonName.parentElement.parentElement.style.display="none"; 
        }
    })
})

  const fetchPokemons=async() => {
    for(let i=1; i< pokemon_count; i++){
        await getPokemon(i);
    }
  }

// api'yi aldigimiz link => https://pokeapi.co/

  const getPokemon=async(id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res=await fetch(url);
    const data=await res.json(); // res degiskenini json formatina cevirdik

    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonDiv=document.createElement("div");
    pokemonDiv.classList.add("pokemon");

    const pokemonId=pokemon.id.toString().padStart(3,'0');  // padStart => ornegin 5 numarali pokemon gelecekse bunun id'si 3 basamakli olsun ve bos bastaki bos basamaklari 0 ile doldursun

    const pokemonType=pokemon.types[0].type.name;

    const pokemonBg=bg_color[pokemonType];
    pokemonDiv.style.backgroundColor=`${pokemonBg}`;  // her pokemonun kendi arkaplan rengi gelecek


    const pokemonDivInnerHTML = `
    <div class="image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="First Pokemon">
    </div>
    <div class="poke-info">
        <span class="poke-id">#${pokemonId}</span>
        <h3 class="poke-name">${pokemon.name}</h3>
        <div class="small">
            <small class="poke-exp">
                <i class="fa solid fa-flask"></i> ${pokemon.base_experience} Exp
            </small>
            <small class="poke-weight">
                <i class="fa solid fa-flask"></i> ${pokemon.weight} Kg
            </small>
        </div>
        <div class="poke-type">
            <i class="fa-brands fa-uncharted"></i> ${pokemonType}
        </div>
    </div>
    `

    pokemonDiv.innerHTML=pokemonDivInnerHTML;
    poke_container.appendChild(pokemonDiv);
}

fetchPokemons();