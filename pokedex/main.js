let cardContainer;

const createTaskCard = (pokemon) => {
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer col-sm-4';
    let imgs = document.createElement('img')
    imgs.className = 'card-img-top'
    imgs.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = pokemon.name.english;
    title.className = 'card-title';

    let color = document.createElement('div');
    color.innerText = pokemon.type;
    color.className = 'card-color';

    cardBody.appendChild(imgs);
    cardBody.appendChild(title);
    cardBody.appendChild(color);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}


const initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    pokemons.forEach((pokemon) => {
        createTaskCard(pokemon);
    });
};

initListOfTasks()