/* Peticion a la API DE THEDOGAPI */
const getDog = async () => {
	const url = 'https://api.thedogapi.com/v1/images/search';
	const res = await fetch(url);

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

export default getDog;