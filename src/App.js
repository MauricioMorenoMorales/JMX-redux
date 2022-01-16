import logo from './logo.svg';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import { Provider } from 'react-redux';
import store from './store';
import Contador from './components/Contador';
import ShoppingCart from './components/ShoppingCart';
import CrudApi from './components/CrudApi';

function App() {
	return (
		<Provider store={store}>
			<div className="App" style={{ textAlign: 'center' }}>
				<h1>Redux</h1>
				<hr />
				<CrudApi />
				<ShoppingCart />
				<hr />
				<Contador />
				<hr />
				<TeoriaRedux />
			</div>
		</Provider>
	);
}

export default App;
