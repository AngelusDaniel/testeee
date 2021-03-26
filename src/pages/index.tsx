import Menu from '../components/Menu';
import  {Jumbotron, Container, Button} from 'reactstrap'
import 'styled-components';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  
    return (
        <div className="pagini">
          <header>
            <title> PVnoticias </title>
          </header> 
          <Menu />
          <Jumbotron>
            <Container className='text-center'>
              
            </Container>
          </Jumbotron>
          <div className="botao1">
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    NOTICIAS
                  </Button>
          </div>
          <style>{`
        .botao1 {
          top: 0px;
          color: blue;
        }
        
      `}</style>


          <div className="botao2">
          <Button   
                    size="lg"
                    block
                    outline color="danger"
                    href=""
                  >
                    COMUNIDADE
                  </Button>
          </div>
          <style>{`
        .botao2 {
          position: relative;
          top: 5px;
        }
       
      `}</style>

        </div>
        

    );
}

export default Home;
