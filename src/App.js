// import logo from './logo.svg';
import './App.css';
import Name from './name';
import Price from './price';
import Description from './Description';
import ImageUrl from './imageUrl';
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
import Profile from './profile';

const samatour = prompt("Entrer votre prenom");

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' , height:20 , borderRadius:"20px"}}>
      <Card.Img variant="top" src={product.ImageUrl} />
        <ImageUrl/>
      <Card.Body style={{backgroundColor:"#E1F0DA"}}>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description></Description>
        </Card.Text>
        <Button variant="primary"> Prix<Price/></Button>
      </Card.Body>
    </Card>
    <div className="mt-3">
        <h5>{samatour ? `Hello, ${samatour}! `: 'Hello, there!'}</h5>
        {samatour? <Profile/>: null}
      </div>
    </div>
  );
}

export default App;
