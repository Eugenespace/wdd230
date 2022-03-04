const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const prophets = jsonObject['prophets'];
  prophets.forEach(displayProphets);
});
// const prophets = jsonObject['prophets']

function displayProphets(prophet) {  // Create elements to add to the documentlet card = document.createElement('section');
  let card = document.createElement('section')
  let rankNum = document.createElement('h1')  
  let h2 = document.createElement('h2');
  let dateBirth = document.createElement('p');
	let placeBirth = document.createElement('p');
  let portrait = document.createElement('img')
      // Change the textContent property of the h2 element to contain the prophet's full name
    rankNum.textContent = `Order ${prophet.order}`
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dateBirth.textContent = `Birthdate:${prophet.birthdate}`;
    placeBirth.textContent = `Birth Place:${prophet.birthplace}`;
    
    portrait.setAttribute('src',prophet.imageurl);
    portrait.setAttribute('alt',`Potrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading','lazy')
    // Add/append the section(card) with the h2 element
    card.appendChild(rankNum)
    card.appendChild(h2);
    card.appendChild(portrait)
    card.appendChild(dateBirth);
		card.appendChild(placeBirth);
    
	

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  // image.setAttribute('src', prophets[i].imageurl, alt="Heber J. Grant - 7");