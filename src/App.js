import React from 'react';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App(){
  return(
    <div className='App'>
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;