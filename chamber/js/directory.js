let directoryURL ="./localDirectory.json";
    fetch(directoryURL)
    .then(response =>  response.json())
    .then(jsonObject => {
        
        const localdirectory = jsonObject['localdirector'];

        for(let i =0; i < localdirectory.length; i++){

            var cards = document.createElement('section');
            var article = document.createElement('article');
            var image_cards = document.createElement('div');
            
            
            var name = document.createElement('h5');
            var address = document.createElement('p');
            var desc = document.createElement('p');
            var phone = document.createElement('p');
            var website = document.createElement('p');
            var img = document.createElement('img');

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
        
        }
    })
    .catch(err => document.querySelector('div.card__directory').innerHTML = err)



    
 