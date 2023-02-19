import React, { useEffect, useState } from 'react';
import CompanyList from "./companyList";
import Loading from "../helpers/spinner";
import { database } from '../firebase/firebase';
import { collection, getDocs} from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const CompanyContainer = ( ) => {
    const { company } = useParams();
  const [data,setData] = useState([]);
  const [spinner,setSpinner] = useState(true);

  useEffect(() => {
    const db = database;
    const itemsCollection = collection(db, `${company.toLowerCase()}`);
    if (company) {
        setSpinner(true)
        getDocs(itemsCollection)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch('Hubo un error!!!!! Corran')
        .finally(setSpinner(false));
    }
  }, [data]);


  return ( spinner ? <Loading></Loading> : <CompanyList data={data} company={company}/> )
}

export default CompanyContainer