import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getAllData, editData, deleteStores } from '../../redux/stores'
import { toogleModal, changeMethod, changeTitle } from '../../redux/modal.js'
import ModalService from './component/ModalService'

function StoreList({stores, creation, getAllData, showModal, toogleModal, changeMethod, changeTitle, editData, deleteStores}) {
  useEffect(()=>{
    getAllData()
  }, [creation])
  
  function editStore(data) {
    editData(data)
    changeMethod('Update')
    changeTitle('Update')
    toogleModal(showModal)
    
  }
  
  return (
    <div className="">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Stores</h1>
        <button onClick={()=>toogleModal(showModal)} className="btn btn-success btn-lg">Add</button>
      </div>
      <div className="shadow custome-size mt-4">
        
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              stores?.map((el,i)=><tr key={i}>
                <td>{ el.id }</td>
                <td>{ el.name }</td>
                <td className="d-flex gap-3">
                  <button className="btn btn-sm btn-info">View</button>  
                  <button onClick={()=>editStore(el)} className="btn btn-sm btn-primary">Edit</button>  
                  <button onClick={()=>deleteStores(el.id)} className="btn btn-sm btn-danger">Delete</button>  
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <ModalService />
    </div>
  )
}

export default connect(({
  stores: {stores, creation},
  modal: {showModal}
})=>({stores, creation, showModal}),{getAllData, toogleModal, changeMethod, changeTitle, editData, deleteStores})(StoreList)
