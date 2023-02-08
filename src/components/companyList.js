import React from "react";
import { Container } from "react-bootstrap";
import Mycard from "./card";
import { Link } from "react-router-dom";

const CompanyList = () => {
    return(
        <>        
        <Container className="companyListContainer">
        <div  >
            <Link className="goback" to="/">
                <span >Go back</span>
            </Link>
        </div>
            <div className="companylist">
            <Mycard image={'assets/technology-gec1a80034_1920.jpg'} title={'Internet+Telefono'}/>
                <Mycard image={'assets/chemistry-gc5fe3026a_1920.jpg'} title={'Gas'}/>
                <Mycard image={'assets/electricity-g968b1227d_1920.jpg'} title={'Electricidad'}/>
                <Mycard image={'assets/health-g76d18aaaa_1280.jpg'} title={'Plantilla'}/>
                <Mycard image={'assets/finger-g924cb8e5c_1280.jpg'} title={'Dian'}/>
                <Mycard image={'assets/hands-gc1721ddcf_1920.jpg'} title={'Camara de Comercio'}/>
            </div>
        </Container>
        </>

    )
}

export default CompanyList