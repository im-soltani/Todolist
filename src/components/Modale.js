import React,{useState} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function ModalExample({edit , id,todot}){

  const [value,setvalue]=useState(todot);
  const [modal, setModal] = useState(false);

  const toggle = () => setvalue(!modal);

  const handleSubmit=(e)=> {
    e.preventDefault();
setModal(false)

  edit( id,value); 
  setvalue("") 
  }
  return (
    <div>
    
      <Button className="my-btn"  onClick={()=>setModal(true)}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <input onChange={e => setvalue(e.target.value)} value={value} type="text"></input>
        </ModalBody>
        <ModalFooter >
          <Button className="my-btn" color="primary" onClick={handleSubmit}>Valider</Button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;