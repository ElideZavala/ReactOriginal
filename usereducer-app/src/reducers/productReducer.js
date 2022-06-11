import types from "../types";

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
		case types.PRODUCTSHOW:
			return {
				...state,
				// Mostramos el producto actual, no es necesario mandar el ID, lo actualizamos al nuevo producto.  
				activeProduct: action.payload
			}
		case types.PRODUCT_ADD_CART:
			return { 
				...state,
				cart: [
					...state.cart,
					action.payload
				]
			}

		default:
			return state;
	}	
}

export { initialProductState }
export default productReducer;