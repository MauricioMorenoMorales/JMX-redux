import logo from './logo.svg';
import './App.css';
import TeoriaRedux from './components/TeoriaRedux';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="App" style={{ textAlign: 'center' }}>
				<h1>Redux</h1>
				<hr />
				<TeoriaRedux />
			</div>
		</Provider>
	);
}

export default App;
