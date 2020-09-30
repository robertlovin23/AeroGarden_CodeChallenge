import React, {useState, getState, useEffect } from 'react';
import Search from '../components/Search';
import List from '../components/List';

const App = () => {
  //Initalize state for gardens and seeds
  const [gardens, setGardens] = useState([]);
  const [seeds, setSeeds] = useState([]);

  const url = 'http://localhost:3001';

  //Fetch data from gardens endpoint
  const getGardenData = async () => {

    const response = await fetch(`${url}/gardens`)

    const data = await response.json();

    setGardens(data)
  }

  //Fetch data from seed_kits endpoint
  const getSeedData = async (search) => {

    const seedName = search;

    const response = await fetch(`${url}/seed_kits`);

    const data = await response.json();

    //Filter seed data if the dropdown selection is equal to an array item
    data.filter(seed => {
      if(seed.name === seedName){
        setSeeds(seed)
      }
    })  
  }
  
  //Initialize array to filter gardens
  const newArr = []

  /*Filter Gardens based off grow height, wattage, and the amount of pods each seed pod.
   Push to the array created above and pass to the Search component */
  if(gardens.length){
    gardens.filter(i => {
          if(i.grow_height >= seeds.min_grow_height 
            && i.wattage >= seeds.min_wattage
            && seeds.pods.includes(i.pods)
            || i.pods > seeds.pods[seeds.pods.length - 1]){
              
              newArr.push(i)

            }
    })
  }


  //Mount getSeedData and getGardenData
  useEffect(() => {
    getSeedData('gourmet_herbs')
    getGardenData();
  },[])  


  //Return
  return (
    <div className="ui container" >
      <Search submitSeedKit={getSeedData}/>
      <h5>Garden's that will work for you:</h5>
      <div>
        <List gardens={newArr}/>
      </div>
    </div>
  );
}

export default App;
