import React, {Component, useEffect, useState} from 'react';
import './App.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Auxiliary from './components/Auxiliary';

const api_url = 'http://localhost:5000/'

const App = () => {

  const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([]);

    useEffect(()=>{
       fetch(api_url)
        .then(res=>res.json())
        //.then(res=>console.log(res))
           .then(rowData => setRowData(rowData))

      
        .catch(err=> new Error('message'))
 },[]);

  function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

  return (

    <Auxiliary>

      
    <div className="ag-theme-alpine" style={ { height: 400, width: 600 , background : 'orange' , alignContent : 'center' } }>

      <div>
        <h1 style = {{color : 'red' , background : 'black', display : 'centre'}}>College Timetable Management</h1>
        <p style = {{color : 'purple'}}>Below is the table which contains professor names who have been assigned lectures against the time and day </p>
        <p>There is a symbol present against each day which has the functionality where you can filter out data( like contains,starts with, ends with, and so on...) for that particular day</p>
        <p>You can also sort the order of the data by clicking on the header names provided. Play around for a while and have fun in selecting your dearest professor</p>
        <p>Please be regular in attending all the lectures this week. There are no lectures after friday so you can enjoy Diwali</p>
      </div>
            <AgGridReact

              onGridReady = {onGridReady}
                rowData={rowData}>
                <AgGridColumn  field="timings" sortable = {true} filter = {true} ></AgGridColumn>
                <AgGridColumn field="monday" sortable = {true} filter = {true} ></AgGridColumn>
                <AgGridColumn field="tuesday" sortable = {true} filter = {true} ></AgGridColumn>
                <AgGridColumn field="wednesday" sortable = {true} filter = {true} ></AgGridColumn>
                <AgGridColumn field="thursday" sortable = {true} filter = {true} ></AgGridColumn>
                <AgGridColumn field="friday" sortable = {true} filter = {true} ></AgGridColumn>
           
            </AgGridReact>
            
            <h1 style = {{background:'Yellow'}}>HAPPY DIWALI:)</h1>
        </div>

        
        </Auxiliary>
  );
}

export default App;

