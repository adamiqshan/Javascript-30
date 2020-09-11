const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint).then(response => response.json()).then(places => cities.push(...places));

function findCities(textToMatch, cities) {
    const pattern = new RegExp(textToMatch, 'gi');

    return cities.filter(places => {
        return places.city.match(pattern) || places.state.match(pattern)
    })
}

function displayCities() {
    const matched = findCities(this.value, cities)
    const regex = new RegExp(this.value, 'gi');

    const html = matched.map(place => {

        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

        return `
  <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${place.population}</span>
  </li>
`;
    }).join('')

    suggestion.innerHTML = html
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions')


searchInput.addEventListener('change', displayCities);
searchInput.addEventListener('keyup', displayCities);