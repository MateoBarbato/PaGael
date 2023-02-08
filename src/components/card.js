import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Mycard = ({image, title,link}) => {
  return (
    <Card className='cardContainer'>
      {/* NEED TO ADD VARIABLE ROUTE */}
              <Link to={'/company'}>
               <Card.Img className='card-img' variant="top" src={image} />
                <Card.Body className='cardBody'>
                    <Card.Title >PagaEl: {title}</Card.Title>
                </Card.Body>
                </Link>
            </Card>
  );
}

export default Mycard;