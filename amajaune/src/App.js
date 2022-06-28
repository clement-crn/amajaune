
import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import {Main} from './components/Main';
import Cardsmenu from './components/Cards/Cardsmenu';


function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Main />
      <Cardsmenu />
    </div>
  );
}

export default App;
