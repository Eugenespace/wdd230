const directoryURL = './directory.json';
fetch(directoryURL)
.then(response =>  response.json())
.then(jsonObject => {
    
    const localdirectory = jsonObject['localdirector'];

    for(let i =0; i < localdirectory.length; i++){

        const cards = document.createElement('section');
        const article = document.createElement('article');
        const image_cards = document.createElement('div');
        
        
        const name = document.createElement('h5');
        const address = document.createElement('p');
        const desc = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const img = document.createElement('img');

        name.textContent = localdirectory[i].name;
        address.textContent = localdirectory[i].address;
        desc.textContent = localdirectory[i].desc;
        phone.textContent = localdirectory[i].phone;
        website.textContent = localdirectory[i].website;
        img.setAttribute('src', localdirectory[i].imageUrl);


        image_cards.appendChild(img, img.alt= localdirectory[i].name, img.className = 'event__image');

        article.appendChild(name);
        article.appendChild(address);
        article.appendChild(desc);
        article.appendChild(phone);
        article.appendChild(website);


        document.querySelector('div.card__directory').appendChild(cards, cards.appendChild(article)).appendChild(image_cards);
        // document.querySelector('div.cards',article).appendChild(article);
    }
})
.catch(err => document.querySelector('div.card__directory').innerHTML = err)
