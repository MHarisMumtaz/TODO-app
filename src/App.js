import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import MainList from './list/MainList';
import AddTodoModal from './list/AddTodoModal';

class App extends Component {
   
  constructor(props, context) {
    super(props, context);

    this.handleModalShow  = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    
    this.state = {
      items        : [],
      showModal    : false,
      editableItem : {}
    };
  }
  handleModalClose() {
    this.setState({ showModal: false });
    this.setState({ editableItem : {}});
  }

  handleModalShow() {
    this.setState({ showModal: true });
  }

  addItem(title,desc){
    let item = {
      id     : this.state.items.length,
      title   : title,
      desc   : desc,
      isEdit : false
    };
    this.handleModalClose();
    this.setState({items: [...this.state.items, item]});
  }

  onEditCallBack(myItem){
    myItem.isEdit = true;
    this.setState({editableItem : myItem});
    this.handleModalShow();
  }

  updateItem(id,title,desc){
    const items = this.state.items.slice();
    items[id].title = title;
    items[id].desc = desc;
    this.setState({editableItem : {}});
    this.setState({items: items});
    this.handleModalClose();
  }

  onRemoveCallBack(removeItem){
    const items = this.state.items.slice();
    let newItems = items.filter((item) => { return item.id !== removeItem.id });
    this.setState({items: newItems});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TECH BLOGS</h1>
        </header>
         <div className="container list">
            <div className="marg"> TODO List <button className="btn" onClick={this.handleModalShow}>Add Item </button></div>
              <MainList 
                items={this.state.items} 
                removeCallBack={this.onRemoveCallBack.bind(this)}
                editCallBack={this.onEditCallBack.bind(this)} 
              />
              <AddTodoModal 
                isShow={this.state.showModal} 
                editableItem={this.state.editableItem} 
                addTodoCallBack={this.addItem.bind(this)} 
                updateTodoCallBack={this.updateItem.bind(this)}
                closeCallBack={this.handleModalClose.bind(this)} 
              />
         </div>
      </div>
    );
  }
}

export default App;
