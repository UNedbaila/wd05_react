
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Search} from "./components/Search/Search";
import {Button} from "./components/Button/Button";
import {Title} from "./components/Title/Title";
import {Tabs} from "./components/Tabs/Tabs";

function App() {
  return (
    <div className="App">
        <div className="Nav">
            <Navbar />
            <Search />
            <Button title={'Name Last'} type={'primary'} />
        </div>
        <div className="Tit">
            <Title title={'Sign In'} />
        </div>
        <div className="Tab">
            <Tabs />
        </div>
    </div>
  );
}

export default App;
