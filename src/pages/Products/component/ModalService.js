import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toogleModal } from "../../../redux/modal"
import { createProduct, updateProduct } from "../../../redux/products"

function ModalService({showModal, toogleModal, method, title, }) {
  const [type, setType] = useState('')
  const input = useRef()
  async function handleSubmit(e) {
    e.preventDefault();
    if (method === 'Add') {
      
    } else if(method === 'Update'){
      
    }
    
    toogleModal(showModal)
  }
  
  return (
    <div>
      <Modal isOpen={showModal} toggle={()=>toogleModal(showModal)}>
        <ModalHeader toggle={()=>toogleModal(showModal)}>{title}</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="store">
                Store Name
              </label>
              <input
                type="text"
                defaultValue={ type}
                onChange={(e) => setType(e.target.value)}
                id="store"
                className="form-control form-control-lg"
                placeholder="Name the store"
                ref={input}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button type='submit' color="primary" onClick={handleSubmit}>
            {method}
          </Button>
          <Button color="secondary" onClick={()=>toogleModal(showModal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect(({
  modal: {showModal, method, title},
})=>({showModal, method, title}), {toogleModal, })(ModalService);