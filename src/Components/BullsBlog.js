//React-Bootstrap-Styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Blogs.css'


import JordanHero from './images/JordanHeroImage.jpg'

function BullsBlog() {
 return (
     <Container className='blogContainer'>
       <h1>Go Bulls!</h1>
       <Row>
        <Col>Standings</Col>
        <Col xs={6}><img src={JordanHero} className='heroes' alt='Jordan hero'/></Col>
        <Col>Stat Leaders</Col>
      </Row>
      <Row>
        <Col>Upcoming Schedule</Col>
        <Col>Article 1</Col>
        <Col>Article 2</Col>
        <Col>Injuries</Col>
      </Row>
      <Row className='bottom'>
        <Col>1</Col>
        <Col>2</Col>
      </Row>
     </Container>
 );
}

export default BullsBlog;