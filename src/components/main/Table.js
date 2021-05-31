import React from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Table=()=>{
  const data=[
    {id : 'vivek' , deta : 20 , description : "fjgj394954" , status : 'complited', descriptions : '$25000' },
    {id : 'vivek' , deta : 20 , description : "fjgj394954", status : 'complited' , descriptions : '$25000'},
    {id : 'vivek' , deta : 20 , description : "fjgj394954", status : 'complited' , descriptions : '$25000'},
    {id : 'vivek' , deta : 20 , description :"fjgj394954" , status : 'complited', descriptions : '$25000'},
    {id : 'vivek' , deta : 20 , description : "fjgj394954" , status : 'complited', descriptions : '$25000'},
    {id : 'vivek' , deta : 20 , description : "fjgj394954" , status : 'complited', descriptions : '$25000'},
    
  ]
  const columns=[
    {
      headerName : "Name",field : 'id',checkboxSelection:true
    },
    {
      headerName : "Data",field : 'deta'
    },
    {
      headerName : "Description",field : 'description'
    },
    {
      headerName : "Status",field : 'status'
    }
,

    {
      headerName : "Descriptions",field : 'descriptions'
    }


  ]
  const defaultColDef={
    sortable:true,editable:true,filter:true 
  }
  return(
    <div className="ag-theme-alpine"
    style={{
      height: '350px',
      width: '1100px',
      alignContent: 'center'
    }}>
      <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef}/>
    </div>
  );

}


