import React from 'react';
import { Container } from 'react-bootstrap';
import Mycard from './card';
import {Link } from 'react-router-dom';

const CompanyList = ({data,company}) => {
  return (
    <>
      <Container className='companyListContainer'>
        <div className='text'>
          <h2>{company}</h2>
          <div className='instructions'>
            <p>
              Para pagar el servicio elija el proveedor de y lo re-enviara a la pagina de pagos.
            </p>
          </div>
        </div>
        <div className='goback'>
          <Link to='/'>
            <span>Ir atras</span>
          </Link>
        </div>

        <div className='companylist'>
          {data.map((company, index) => {
            return (
              <Mycard
                key={index}
                target={'blank'}
                image={`assets/logosCompany/${company.image}`}
                title={company.name}
                link={company.link}
              />
            );
          })}
        </div>

        <div className='goback'>
          <Link to='/'>
            <span>Ir atras</span>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default CompanyList;
