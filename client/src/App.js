import './App.css';
import Blog from './components/Blog'
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Blog></Blog>
    </div>
  );
}

export default App;

