import logo from './logo.svg';
import './App.css';
import data from './excelToJsonSheet0.json';
import {MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
MDBBtn,
MDBBtnGroup,
MDBPagination,
MDBPaginationItem,MDBPaginationLink} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

function App() {
  // console.log(data);
   const d=data; 
  const [datas,setDatas]=useState([data]) ;
  const [value,setValue]=useState("");
  const [sortValue,setSortValue]=useState("");
  const sortOptions=["fname","lname","age"];
  useEffect(()=>
  {
    // loadUsers(data);
    loadUsers()
    // console.log(datas);
  },[])
  const loadUsers=()=>
  {
    setDatas(d);
  }
  // console.log(datas);
  // loadUsers(data);
  const handleReset=(e)=>
  {
    e.preventDefault();
    loadUsers();
  }
  const handleSearch=(e)=>
  {
    e.preventDefault();
    let new_arr=datas.filter((item)=>value===item.fname);
    setDatas(new_arr);
    setValue("");
  }
  const handleSort=(e)=>
  {
    // e.preventDefault();
    setSortValue(e.target.value);
    setDatas(datas.sort((a,b)=>(a.sortValue<b.sortValue)?1:-1))
    
  }
  return (
    <MDBContainer>
      <form style={{margin:"auto",
    padding:"15px",
    maxWidth:"400px",
    alignContent:"center"}}
    className="d-flex input-group w-auto"
    onSubmit={handleSearch}>

      <input type="text"
      className='form-control'
      placeholder='search name....'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
      {/* <MDBBtnGroup> */}
        <MDBBtn type="submit" color="dark">Search</MDBBtn>
        <MDBBtn className='mx-2' color="info" onClick={(e)=>handleReset(e)}>Reset</MDBBtn>
      {/* </MDBBtnGroup> */}

      </form>
        <div style={{marginTop:"100px"}}>
          <h2 className='text-center'>Search,Filter,Sort and Pagination using Json Fake Rest API</h2>
          <MDBRow>
            <MDBCol size='20'>
              <MDBTable>
                <MDBTableHead dark>
                    <tr>
                      <th scope='col'>Id</th>
                      <th scope='col'>FirstName</th>
                      <th scope='col'>LastName</th>
                      <th scope='col'>Gender</th>
                      <th scope='col'>Country</th>
                      <th scope='col'>Age</th>
                      <th scope='col'>JoiningDate</th>
                    </tr>
                </MDBTableHead>
                {datas.length===0 ? (
                  <MDBTableBody className='text-center mb-0'>
                    <tr>
                      <td colSpan={8} className='align-center mb-0'>No Data Found</td>
                    </tr>
                  </MDBTableBody>
                ):(
                  datas.map((item,index)=>
                  (
                    <MDBTableBody >
                      {/* key={index}> */}
                      <tr key={index}>
                        {/* <th scope='row'>{index+1}</th> */}
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.country}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>{item.joindate}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                ) }
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
          <MDBRow>
            <MDBCol size='8'>
              <h5>Sort By:</h5>
              <select style={{width:'50%',borderRadius:'2px',height:'35px'}}
              onChange={handleSort}
              value={sortValue}
              >
                <option>Please Select Value</option>
                {
                  sortOptions.map((item,index)=>(

                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                }
              </select>
            </MDBCol>
            
          </MDBRow>
    </MDBContainer>
  );
}

export default App;
