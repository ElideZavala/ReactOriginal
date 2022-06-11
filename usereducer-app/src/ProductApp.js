import { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import types from "./types";

const ProductApp = () => {
	const [productState, dispatch] = useReducer( productReducer, initialProductState );

	// Extraer lo que necesitamos en el componente
	const { products, cart, activeProduct } = productState;

  return (
	 <div>
		<h2>Product</h2>
		<ul>
			{products.map( product => (
				<li key={product.id}>
					{product.title}
					<button onClick={() => dispatch({
						type: types.PRODUCTSHOW,
						payload: product
					})}>
						Show
					</button>
					<button onClick={() => dispatch({
						type: types.PRODUCT_ADD_CART,
						payload: product
					})}>
						Add to cart
					</button>
				</li>
			))}
		</ul>

		<h2>Cart</h2>
		<ul>
			{cart.map( product => (
				<li key={product.id}>
					{product.title} - quantity: {product.quantity}
					<button onClick={() => dispatch({
						type: types.PRODUCT_REMOVE_FORM_CART,
						payload: product.id
					})}>
						Remove from cart
					</button>
				</li>
			))}
		</ul>

		<h2>Preview</h2>
		<h2>{activeProduct.title}</h2>
	 </div>
  )
}

export default ProductApp