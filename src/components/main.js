import React, { useEffect, useState } from 'react';
import CategoryList from './categoryList';
import { database } from '../firebase/firebase';
import { collection, getDocs,orderBy,query} from 'firebase/firestore';
import SearchBar from './searchbar';
import AllCompaniesList from './allcompanies';
import MainForm from './mainForm';

const Main = () => {
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fetchAllData = () => {
    const db = database;
    const allCollection = collection(db, 'all');
    getDocs(allCollection)
      .then((snapshot) => {
        setCompanies(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch('Hubo error AHHH')
      .finally();
  };

  const filterData = (data, filter) => {
    if (filter) {
      let result = data.filter((company) => {
        return company.name.toLowerCase().includes(`${filter.toLowerCase()}`);
      });
      setFilteredData(result);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  useEffect(() => {
    const db = database;
    const itemsCollection = collection(db, 'companies');
    const q = query(itemsCollection , orderBy("id", "asc"))
    if (!filter) {
      fetchAllData();
      getDocs(q)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch('Hubo un error!!!!! Corran')
        .finally(() => {});
    }
  }, []);

  useEffect(() => {
    if (filter) {
      filterData(companies, filter);
    }
  }, [filter, data]);

  return (
    <main className='mainContainer'>
      <SearchBar filter={filter} handleChange={handleChange} />
      {filter? 
      <AllCompaniesList data={filteredData}/> : <CategoryList data={data} />}
      <MainForm></MainForm>
    </main>
  );
};

export default Main;
