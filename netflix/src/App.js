import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';

const App = () => {
  return (
    <div>
      <Nav />
      <Header/>
      <Content/>
    </div>
  );
};

export default App;