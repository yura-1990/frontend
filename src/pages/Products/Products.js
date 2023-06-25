import React from 'react'
import { connect } from 'react-redux'
import { getAllData } from '../../redux/products'
import {toogleModal} from "../../redux/modal"
import ModalService from './component/ModalService'

function Products({products, getAllData, toogleModal, showModal}) {
  
  function editProduct(data) {
    
  }
  
  function deleteProduct(id) {
    
  }
  
  return (
    <div className="">
    <div className="d-flex align-items-center justify-content-between">
      <h1>Products</h1>
      <button onClick={()=>toogleModal(showModal)} className="btn btn-success btn-lg">Add</button>
    </div>
    <div className="shadow custome-size mt-4">
      
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Data Expire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((el,i)=><tr key={i}>
              <td>{ el.id }</td>
              <td>{ el.product_name }</td>
              <td>{ el.category }</td>
              <td>{ el.data_expire }</td>
              <td className="d-flex gap-3">
                <button className="btn btn-sm btn-info">View</button>  
                <button onClick={()=>editProduct(el)} className="btn btn-sm btn-primary">Edit</button>  
                <button onClick={()=>deleteProduct(el.id)} className="btn btn-sm btn-danger">Delete</button>  
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
  products: {products},
  modal: {showModal}
})=>({products, showModal}), {getAllData, toogleModal})(Products)