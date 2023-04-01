import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
 return (
   <Navbar>
     <Container>
         <Nav className="ml-auto">
           <Nav.Link  href="/">Home</Nav.Link>
           <Nav.Link  href="/bears">Bears</Nav.Link>
           <Nav.Link  href="/blackhawks">Blackhawks</Nav.Link>
           <Nav.Link  href="/bulls">Bulls</Nav.Link>
           <Nav.Link  href="/whitesox">White Sox</Nav.Link>
         </Nav>
     </Container>
   </Navbar>
 );
}

export default NavBar;