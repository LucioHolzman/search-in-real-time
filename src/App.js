import './App.css';
import Images from './components/Images'
import Search from './components/Search'
import {Footer} from './components/Footer'
// PROVIDER
import {ContextProvider} from './context';

function App() {
  return (
    <ContextProvider>
      <Search/>
      <Images/>
      <Footer/>
    </ContextProvider>
  );
}

export default App;
