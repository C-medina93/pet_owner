import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const App = ()=> {
  const [owners, setOwners] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(()=>{
    const fetchOwners = async()=>{
      const response = await axios.get('api/owners');
      setOwners(response.data);
    } 
    fetchOwners();
  },[]);


  useEffect(()=>{
    const fetchPets = async()=>{
      const response = await axios.get('api/pets');
      setPets(response.data);
    } 
    fetchPets();
  },[]);

  return (
    <>
    <h1>Pets & Owners</h1>
    <main>
      <div>
        <h3>Owners ({owners.length})</h3>
        <ul>
          {
            owners.map( owner =>{
              return(
                <li key = {owner.id}>
                  {owner.name}
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <h3>Pets ({pets.length})</h3>
        <ul>
          {
            pets.map( pet =>{
              return(
                <li key ={pet.id}>
                  {pet.name}
                </li>
              )
            })
          }
        </ul>
      </div>
    </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
