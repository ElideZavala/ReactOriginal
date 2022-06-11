import { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";

const ProductApp = () => {
	const [productState, dispatch] = useReducer( productReducer, initialProductState );

	// Extraer lo que necesitamos en el componente
	const { products, cart, activeProduct } = productState;

  return (
	 <div>
		<h2>Product</h2>
		<ul>
			<li>
				Titulo
				<button>
					Add to cart
				</button>
			</li>
		</ul>

		<h2>Cart</h2>
		<ul>
			<li>
				Titulo
				<button>
					Remove from cart
				</button>
			</li>
		</ul>

		<h2>Preview</h2>
	 </div>
  )
}

export default ProductApp