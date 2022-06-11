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
		case types.PRODUCT_ADD_CART:{
			const newProduct = action.payload;
			const cartContainProduct = state.cart.find(
				product => product.id === newProduct.id
			);

			return cartContainProduct 
				? { 
					...state,
					cart: state.cart.map(product => 
						product.id === newProduct.id
						? {...product, quantity: product.quantity + 1}	
						: product
					)
				}
				: { 
					...state,
					cart: [
						...state.cart,
						// Agregamos el producto al carrito, pero modificamos la cantidad de este.
						{...action.payload, quantity: 1}
					]
				}
			}
		case types.PRODUCT_REMOVE_FORM_CART:
			return {
				...state,
				cart: state.cart.filter( product => product.id !== action.payload )
			}
		
		case types.PRODUCT_REMOVE_ONE_FORM_CART: {
			
			const productDelete = state.cart.find(product => product.id === action.payload);

			return productDelete.quantity > 1 
			? {
				...state,
				cart: state.cart.map(product => 
					product.id === action.payload
					? {...product, quantity: product.quantity - 1}	
					: product
				)
			}
			: {
				... state,
				cart: state.cart.filter(product => product.id !== action.payload)
			}
		}

		default:
			return state;
	}	
}

export { initialProductState }
export default productReducer;