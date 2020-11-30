import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardGroup } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Pruebas from "./Componentes/Prueba"
function App() {
  return (
    <Router>
      <div className="App">
        <div className="cards">
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>PC Gamer</Card.Title>
                <Card.Text>
                PC Gamer
                </Card.Text>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
              </Card.Body>
              <Card.Footer>       
                  <Link to="./pcgamer">
                    <Button variant="primary">ir al computador gamer</Button>
                  </Link>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>PC de renderizados</Card.Title>
                <Card.Text>
                  PC de renderizados
                </Card.Text>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">ir al computador de renderizados</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>PC de oficina</Card.Title>
                <Card.Text>
                  PC de oficina
                </Card.Text>
                <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/775904281671893042/779732562707742751/703-Negro-6.png" />
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">ir al computador de oficinaa</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <Switch>
          <Route path="/pcgamer" exact>
            <Pruebas/>
          </Route>
          <Route path="/" exact>
            hola
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

