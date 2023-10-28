let find = document.getElementById('find');
let country = document.getElementById('country');
let output = document.getElementById('output');

find.addEventListener('click', () => {
  let countryName = country.value;

  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = `
        <img src="${data[0].flags.svg}" alt="" class="flag"/>

        <h2>${data[0].name.common}</h2>

        <div class="wrap">

        <div class="data-wrap">

         <h4>Capital :  </h4>

         <span>${data[0].capital[0]}</span>
        </div>
          
        </div>
        <div class="wrap">

        <div class="data-wrap">

         <h4>Continent :  </h4>

         <span>${data[0].continents[0]}</span>
        </div>
          
        </div>
        <div class="wrap">

        <div class="data-wrap">

         <h4>Population  :  </h4>

         <span>${data[0].population}</span>
        </div>
          
        </div>
        `;
    });
});
