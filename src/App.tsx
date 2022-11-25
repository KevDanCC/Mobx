import { HomeScreen } from './screens/HomeScreen';
import { StoreContext } from './context/storeContext';
import store from './context/storeContext';



function App() {
  return (
    <StoreContext.Provider value={store}>
    <div className="App">
      <HomeScreen />
    </div>
    </StoreContext.Provider>
  );
}

export default App;
