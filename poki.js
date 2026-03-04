async function handleSearch() {

    const name = document.getElementById('searchInput').value.toLowerCase();
    if (!name) return;

    let data;
    const cachedData = localStorage.getItem(name);

    if (cachedData) {
        data = JSON.parse(cachedData); 
    } else {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        data = await response.json(); 

       
        localStorage.setItem(name, JSON.stringify(data));
    }


document.getElementById('pokemonImage').src = data.sprites.front_default;

const cryAudio = document.getElementById('pokemonCry');
cryAudio.src = data.cries.latest;
cryAudio.load();

const dropdowns = [
    document.getElementById('move1'),
    document.getElementById('move2'),
    document.getElementById('move3'),
    document.getElementById('move4')                            
];

dropdowns.forEach(select => {
    select.innerHTML = "";
    data.moves.forEach(m => {
        const option = document.createElement('option');
        option.value = m.move.name;
        option.textContent = m.move.name;
        select.appendChild(option);
    });
});

document.getElementById('searchResultsArea').classList.remove('hidden');
document.getElementById('addToTeamButton').classList.remove('hidden');

window.lastSearchedName = data.name;

    window.lastSearchedName = data.name;
    window.currentPokemonImg = data.sprites.front_default;
    
}
function addToTeam() {
    const container = document.getElementById('team-container');
    container.classList.remove('hidden');

    const m1 = document.getElementById('move1').value;
    const m2 = document.getElementById('move2').value;
    const m3 = document.getElementById('move3').value;
    const m4 = document.getElementById('move4').value;

    const card = document.createElement('div');
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";


    card.innerHTML = `
    <img src="${window.currentPokemonImg}" alt="${window.lastSearchedName}" style="width:100px;">
    <h3>${window.lastSearchedName.toUpperCase()}</h3>
    <ul>
    <li>${m1}</li>
    <li>${m2}</li>
    <li>${m3}</li>
    <li>${m4}</li>
    </ul>
    `;

   

    container.appendChild(card);        
}

