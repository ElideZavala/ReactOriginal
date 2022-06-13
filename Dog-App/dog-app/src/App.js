import { useEffect, useState } from 'react';
import Select from './components/Select'
import Card from './components/Card';
import getDog from './helpers/getDog';

const initialDog = {
  url: "https://breedingbusiness.com/wp-content/uploads/2020/02/music-dog-names.jpg",
  breed: {
    id: 1,
    name: "Delmon"
  }
}

function App() {
  const [dog, setDog] = useState(initialDog)

  useEffect(() => {
    updateDog();
  }, [])

  const updateDog = () =>  {
     getDog()
    .then(newDog => {
      setDog(newDog)
    })
  }

  return (
    <div className="app">
      <Select/>
      <Card dog={dog}/>
    </div>
  );
}

export default App;
