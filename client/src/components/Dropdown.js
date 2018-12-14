import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(e){
    this.setState({
      listOpen: false
    })
  }

  selectItem = (title, id, stateKey) => {
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, stateKey))
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item)=> (
            <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key)}>{item.title} {item.selected}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default onClickOutside(Dropdown);