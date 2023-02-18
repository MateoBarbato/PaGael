import React from 'react';
import Mycard from './card';
import { Container } from 'react-bootstrap';
import db from '../db.json';

const CategoryList = ({data}) => {
  return (
  <Container> 
    <div className='containerCards'>
      {data.map((data, index) => {
        return (<Mycard key={index} link={data.name} image={`assets/${data.image}`} title={data.name} />);
      })
      }
    </div>
  </Container>
    
  );
};

export default CategoryList;
