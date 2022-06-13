import { useEffect, useState } from "react";
import getBreeds from '../helpers/getBreeds';

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


const Select = () => {
	const [breeds, setBreeds] = useState(initialBreeds)
	
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
	}

  return (
    <select onChange={() => alert("change")}>
      {breeds.map((breed) => (
        <option value={breed.id} key={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  )
}

export default Select
