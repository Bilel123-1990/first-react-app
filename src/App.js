
import "./App.css";
import Header from '../src/components/layout/header.jsx'
import Home from '../src/components/home.jsx'
import Footer from '../src/components/layout/footer.jsx'

function App() {
const style={backgroundColor:'red'}
let nameSite='3 w academy'

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
