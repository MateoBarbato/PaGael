import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query, where,addDoc  } from 'firebase/firestore';
import myStuff from '../dbCompany.json'


const firebaseConfig = {
  apiKey: 'AIzaSyCWrwJFp-r71YKsT5d0CS-sLYcYF_lFxG0',
  authDomain: 'pagael-781e4.firebaseapp.com',
  databaseURL: 'https://pagael-781e4-default-rtdb.firebaseio.com',
  projectId: 'pagael-781e4',
  storageBucket: 'pagael-781e4.appspot.com',
  messagingSenderId: '472171741503',
  appId: '1:472171741503:web:97f28625a5cb597092938a',
  measurementId: 'G-B5MGYKT1TL',
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp);



// data.forEach(async (obj, index) => {
//   if(index <= 100) { // manually change this condition to bypass limitations
//     console.log(obj)
//     await addDoc(collection(database,'/gas'),
//       {
//         id: obj.id,
//         name: obj.name,
//         image:obj.image,
//         link:obj.link,
//       })
//       .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch(function (error) {
//         console.error("Error adding document: ", error);
//       });
//   }
// });


export { database };
