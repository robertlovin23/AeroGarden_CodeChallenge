import React, {useState, getState, useEffect } from 'react';
import Search from '../components/Search';
import List from '../components/List';

const App = () => {
  const [gardens, setGardens] = useState([]);
  const [seeds, setSeeds] = useState([]);

  const getGardenData = async () => {
    const response = await fetch('http://localhost:3001/gardens')

    const data = await response.json();

    setGardens(data)
  }

  const getSeedData = async (search) => {

    const seedName = search;
    const response = await fetch(`http://localhost:3001/seed_kits`);

    const data = await response.json();

    data.filter(seed => {
      if(seed.name === seedName){
        setSeeds(seed)
      }
    })  
  }
  
  const newArr = []

  

  gardens.filter(i => {
        if(i.grow_height >= seeds.min_grow_height &&
          i.wattage >= seeds.min_wattage &&
            seeds.pods.includes(i.pods) ||
            i.pods > seeds.pods[seeds.pods.length - 1]
          ){
            console.log(i)
            newArr.push(i)
          }
  })


  useEffect(() => {
    getSeedData('gourmet_herbs')
    getGardenData();
  },[])  

  return (
    <div className="App" >
      <Search submitSeedKit={getSeedData}/>
      <List gardens={newArr}/>
    </div>
  );
}

export default App;
