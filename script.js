const equiposAPI = "https://www.balldontlie.io/api/v1/teams/";

const selectTeam = document.getElementById("selectTeam");

async function getTeams() {
  let response = await fetch(`${equiposAPI}`);
  let dataTeams = await response.json();
  fillSelectNames(dataTeams.data);
}

const fillSelectNames = (dataTeams) => {
  dataTeams.forEach((team) => {
    let optionElement = document.createElement("option");
    let teamName = team.name;
    optionElement.value = teamName;
    optionElement.textContent = teamName;

    selectTeam.appendChild(optionElement);
  });
};
document.getElementById('button').addEventListener('click', datosEquipo);

async function datosEquipo() {

  let nameTeam = selectTeam.value;
  let response = await fetch(`${equiposAPI}`);
  let dataTeams = await response.json();
  let nombreCompleto;
  let nombreAbreviacion;
  dataTeams.data.forEach((team) => {

    if (team.name === nameTeam) {
      nombreCompleto = team.full_name;
      nombreAbreviacion = team.abbreviation;
      console.log("Abreviacion de "+ nombreCompleto + ": "+ nombreAbreviacion);
    }

  });
  
}

getTeams();
