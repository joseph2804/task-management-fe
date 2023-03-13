import './App.css';
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <div className='row'>
        <div className='col-2' style={{ backgroundColor: 'red' }}>
          abc
        </div>
        <div className='col-10' style={{ backgroundColor: 'blue' }}>
          xyz
        </div>
      </div>
    </Container>
  );
}

export default App;
