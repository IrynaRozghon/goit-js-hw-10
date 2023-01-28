export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,languages,flags,population`)
        .then(response => response.json())
};
