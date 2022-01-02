import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, delFromCart } from '../actions/shoppingActions';
import CardItem from './CardItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const { products, cart } = state.shopping;

	return (
		<div>
			<h2>carrito de compras</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{products.map(product => (
					<ProductItem
						key={product.id}
						data={product}
						addToCart={() => dispatch(addToCart(product.id))}
					/>
				))}
			</article>
			<h3>Carrito</h3>
			<article className="box">
				<button onClick={() => dispatch(clearCart())}>Limiar Carrito</button>
				{cart.map((item, index) => (
					<CardItem
						key={index}
						data={item}
						delOneFromCart={() => dispatch(delFromCart(item.id))}
						delAllFromCart={() => dispatch(delFromCart(item.id, true))}
					/>
				))}
			</article>
		</div>
	);
};

export default ShoppingCart;
