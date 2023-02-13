import React from "react";
import { Container } from "react-bootstrap";
import Mycard from "./card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import db from '../db.json'

const CompanyList = () => {

    const {company} = useParams();
    console.log(company)
    const dbfiltered =  db.filter(service => service.name == company)
    // console.log(dbfiltered)
    const newdb = dbfiltered[0].companies
    console.log(newdb)
    return(
        <>        
        <Container className="companyListContainer">
        <div className="goback">
            <Link  to="/">
                <span >Go back</span>
            </Link>
        </div>
            <div className="companylist">
                {newdb.map((company,index)=>{
                    return <Mycard key={index} image={`assets/${company.image}`} title={company.name} link={company.link}/>
                })}
            </div>
        </Container>
        </>

    )
}

export default CompanyList