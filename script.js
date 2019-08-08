//Fonction qui prend en paramètre 'new val', selection de l'iD qui
//se trouve en HTML, lorsque je bouge le curseur le prix max s'affiche
//dans le fichier html quand la fonction est appelé,
//elle a pour (paramètre) 'this.value'
//Lorque le curseur est bougé elle prend automatique sa valeur
//Newval correspond au curseur
function AfficheRange2(newVal){
  document.getElementById("valeur").innerHTML="Prix max="+newVal+"€";
};


//function myFunction() {
//     document.querySelector('val').style.fontfamily = 'Raleway';
//};


const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '05/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '02/12/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];
