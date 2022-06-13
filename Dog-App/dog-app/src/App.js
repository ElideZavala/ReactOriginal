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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    updateDog();
  }, [])

  const updateDog = (breedId) =>  {
    setLoading(true)
     getDog(breedId)
    .then(newDog => {
      setDog(newDog)
      setLoading(false)
    })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog} loading={loading}/ >
    </div>
  );
}

export default App;
