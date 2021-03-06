import { useEffect, useState } from "react";
import getBreeds from '../helpers/getBreeds';
import Error from  './Error';

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
]


const Select = ({updateDog}) => {
	const [ breeds, setBreeds ] = useState(initialBreeds);
  const [ error, setError ] = useState(null);
	
	useEffect(() => {
		// Esta funcion se llamara la primera vez que carga el componente.
		// Esta funcion se llamara cada vez que se cambie el estado de breeds.
		// Useffect se ejecuta una sola vez.
		// UseEffect se ejecuta despues de que el componente se renderiza.
		updateBreeds();
	}, [])

	/* ******* llamado a la API ******* */
	const updateBreeds = () => {
		getBreeds()
			.then((newBreeds) => {
				setBreeds(newBreeds)
			})
      .catch((error) => {
        console.log(error)
        setError("Error al cargar las razas de perros")
      })
	}

  return (
    <>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      { error && <Error error={error}/>}

    </>
  )
}

export default Select
