# Proyecto de Razas de perro
> 💻 [Link hacia la página del proyecto](https://aesthetic-jalebi-30137c.netlify.app/) 💻

Este Proyecto fue realizado con [React](https://reactjs.org/) usando la API de [TheDogAPI](https://docs.thedogapi.com/). 

##### Peticiones a la API **Optener todas las razas**
``` JavaScript
	const getBreeds = async () => {
	const url = 'https://api.thedogapi.com/v1/breeds';
	const res = await fetch(url);

	if(!res.ok) {
		const { url, status, statusText } = res;
		throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
	}

	const breeds = await res.json(); 
	return breeds;
}
```

##### Peticiones a la API **Optener por raza**
``` JavaScript
	const getDog = async (breedId) => {

	// Si el valor es undefined o es 0, traeros cierta condicion
	const url = !breedId || breedId === 0 
		? 'https://api.thedogapi.com/v1/images/search'
		: `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`

	const res = await fetch(url);

	// Comprobamos si la peticion fue exitosa
	if(!res.ok) {
		const { url, status, statusText } = res;
		throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
	}

	// Desestruturamos al primer arreglo [0]
	const  [data] = await res.json();
	
	// Le colocamos un alian a la url la cual se llmara image,  
	// Desestruturamos breeds en el primer arreglo
	let { url: image, breeds: [breed]} = data;

	// Si breed no existe, cambiaemos la variable breed
	if(!breed) {
		breed =  {
			id: 0,
			name: 'Random'
		}
	}
	
	
	const dog = {
		image,
		breed
	}

	return dog;
}
```

