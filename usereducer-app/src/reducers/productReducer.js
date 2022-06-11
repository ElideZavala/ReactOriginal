const initialProductState = {
	products: [
		{ id: 1, title: "Product #1", price: 100 },
		{ id: 2, title: "Product #2", price: 250 },
	],
	cart: [
		{ id: 1, title: "Product #1", quantity: 1},
	],
	activeProduct: { id: 2, title: "Product #2", quantity: 1 },
}

const productReducer = (state, action) => {
	switch(action.type) {
		default:
			return state;
	}	
}

export { initialProductState }
export default productReducer;