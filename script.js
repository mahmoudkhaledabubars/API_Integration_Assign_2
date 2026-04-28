fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("countries");

  data.forEach(country => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    const name = country.name.common;
    const capital = country.capital ? country.capital[0] : "No capital";
    const currency = country.currencies 
      ? Object.keys(country.currencies)[0]
      : "No currency";

    card.innerHTML = `
      <div class="card shadow p-3 mb-3">
        <h5>${name}</h5>
        <p>🏙 Capital: ${capital}</p>
        <p>💰 Currency: ${currency}</p>
      </div>
    `;

    container.appendChild(card);
  });
})
.catch(err => console.log(err));