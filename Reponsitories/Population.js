import axios from 'axios';
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SERVER_NAME = 'datausa.io';
async function getPopulation({drilldowns, measures}) {
  const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
  let results = [];
  let responseData = await axios.get(urlGetPopulation);

  responseData.data.data.forEach(item => {
    let myObject = {};
    myObject.nationId = item['ID Nation'];
    myObject.nation = item['Nation'];
    myObject.year = item['Year'];
    myObject.population = item['Population'];
    results.push(myObject);
  });
  return results;
}

export {getPopulation};
