//kriti
import React, { Component } from 'react';
import classnames from 'classnames';
import Dropdown from './Dropdown';

class ImageUploadForm extends Component {
  state = {
    // category: '',
    category: [
      {
        id: 0,
        title: 'Anime',
        selected: false,
        key: 'category'
      },
      {
        id: 1,
        title: 'Fails',
        selected: false,
        key: 'category'
      },
      {
        id: 2,
        title: 'Funny',
        selected: false,
        key: 'category'
      },
      {
        id: 3,
        title: 'Memes',
        selected: false,
        key: 'category'
      },
      {
        id: 4,
        title: 'Staff Picks',
        selected: false,
        key: 'category'
      }
    ],
    url: '',
    tag: '',
    errors: {}
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // validation
    let errors = {};
    // if (this.state.category === '') errors.category = "Can't be empty";
    if (this.state.url === '') errors.url = "Can't be empty";
    if (this.state.tag === '') errors.tag = "Can't be empty";
    this.setState({ errors });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h2 align="center">Add new image</h2>

        

        <div className={classnames('field', { error: !!this.state.errors.category})}>
          <label htmlFor="category">Category</label>
          <Dropdown
            title="Select Category"
            list={this.state.category}
            resetThenSet={this.resetThenSet}
          />
          {/* <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            id="category"
          />
          <span>{this.state.errors.category}</span> */}
        </div>

        <div className={classnames('field', { error: !!this.state.errors.url})}>
          <label htmlFor="url">Image URL</label>
          <input
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
            id="url"
          />
          <span>{this.state.errors.url}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.tag})}>
          <label htmlFor="tag">Tag</label>
          <input
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id="tag"
          />
          <span>{this.state.errors.tag}</span>
        </div>

        <div className="field">
          {this.state.url !== '' && <img src={this.state.url} alt="url" className="ui small bordered image"/>}
        </div>

        <div className="field">
          <button className="ui primary button">Upload</button>
        </div>
      </form>
    );
  }
}

export default ImageUploadForm;