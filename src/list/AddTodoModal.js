import React, { Component } from 'react';
import { Modal,Button,Form,FormGroup,Col,FormControl } from 'react-bootstrap';

class AddTodoModal extends Component {

	btnClickHandler(){
		if (!this.props.editableItem.isEdit) {
			this.props.addTodoCallBack(this.titleInput.value,this.descInput.value);	
		}else{
			this.props.updateTodoCallBack(this.props.editableItem.id,this.titleInput.value,this.descInput.value);
		}
	}

	render(){
		return (
			  <Modal bsSize="large" show={this.props.isShow} onHide={this.props.closeCallBack}>
		          <Modal.Header closeButton>
		            <Modal.Title>Add TODO</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          		<Form horizontal>
						  <FormGroup controlId="formHorizontalEmail">
						    <Col sm={2}>
						      Title
						    </Col>
						    <Col sm={10}>
						      <FormControl type="text" placeholder="Title" inputRef={input => this.titleInput = input} defaultValue={this.props.editableItem.title}/>
						    </Col>
						  </FormGroup>
						   <FormGroup controlId="formControlsTextarea">
						      <Col sm={2}>
						      	Description
						      </Col>
						      <Col sm={10}>
						      <FormControl componentClass="textarea" placeholder="Description" inputRef={input => this.descInput = input} defaultValue={this.props.editableItem.desc} />
						      </Col>
						    </FormGroup>
						</Form>
		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={() => this.btnClickHandler()}>
			            {this.props.editableItem.isEdit ? 'Update' : 'Add'}
		            </Button>
		          </Modal.Footer>
		      </Modal>
		);
	}
}

export default AddTodoModal;