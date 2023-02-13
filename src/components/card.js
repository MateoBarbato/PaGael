import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Mycard = ({image, title,link, target}) => {

  let condition = target ? 'blank' : ''

  return (
    <Card className='cardContainer'>
      {/* NEED TO ADD VARIABLE ROUTE */}
              <Link to={link}  target={condition}>
               <Card.Img className='card-img' variant="top" src={image} />
                <Card.Body className='cardBody'>
                    <Card.Title >{title}</Card.Title>
                </Card.Body>
                </Link>
            </Card>
  );
}

export default Mycard;