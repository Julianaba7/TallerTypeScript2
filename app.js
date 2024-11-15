import { series } from './data.js';
const tableBody = document.getElementById('seriesTabla');
let promedio = document.getElementById("average");
const detailsContainer = document.getElementById('detailsContainer');
tabla(series);
function tabla(series) {
    if (tableBody) {
        let num_series = 0;
        let temporadas = 0;
        series.forEach(function (serie) {
            const columna = document.createElement('tr');
            columna.innerHTML = `
                <td><strong>${serie.id}</strong></td>
                <td style="color: blue; cursor: pointer;" onclick="showSerieDetails(${serie.id})">${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            `;
            const nameCell = columna.querySelector('td:nth-child(2)');
            nameCell === null || nameCell === void 0 ? void 0 : nameCell.addEventListener('click', () => showSerieDetails(serie.id));
            tableBody.appendChild(columna);
            num_series++;
            temporadas += serie.seasons;
        });
        promedio.innerHTML = temporadas / num_series + "";
    }
}
function showSerieDetails(id) {
    const serie = series.find(s => s.id === id);
    if (serie && detailsContainer) {
        detailsContainer.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src= "${serie.imagen}" class="card-img-top" alt="${serie.name} " >
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                <a href="${serie.url}" class="btn btn-primary" target="_blank">Más información</a>
        `;
    }
}
