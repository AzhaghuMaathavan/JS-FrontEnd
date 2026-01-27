import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import Counter from './Redux/Counter';
import './App.css'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  )
}

export default App
