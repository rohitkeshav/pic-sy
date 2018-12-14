//kriti
import React, { Component } from 'react';
import classnames from 'classnames';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { saveImage } from '../actions';
import { Redirect } from 'react-router';

class ImageUploadForm extends Component {
  state = {
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
    errors: {},
    selectedCategory: '',
    loading: false,
    done: false
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
    // let selectedCategory = '';
    for(let x in this.state.category){
      if(this.state.category[x].selected === true)
      this.state.selectedCategory = this.state.category[x].title;   
    }

    
    console.log("errors ==> ", errors);
    // console.log("this.state.category", this.state.selectedCategory)
    if (this.state.selectedCategory === '') errors.selectedCategory = "Can't be empty";
    if (this.state.url === '') errors.url = "Can't be empty";
    if (this.state.tag === '') errors.tag = "Can't be empty";
    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      console.log("state", this.state);
      const { url, tag, selectedCategory } = this.state;
      console.log("errors", errors)
      this.setState({ loading: true });
      this.props.saveImage({ url, tag, selectedCategory }).then(
        () => { this.setState({ done: true })},
        (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
      );
    }
  }

  render() {
    const form = (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h2 align="center">Add new image</h2>

        {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

        <div className={classnames('field', { error: !!this.state.errors.selectedCategory})}>
          <label htmlFor="category">Category</label>
          <Dropdown
            name="category"
            title="Select Category"
            list={this.state.category}
            resetThenSet={this.resetThenSet}
            onChange={this.handleChange}
          />
           <span>{this.state.errors.selectedCategory}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.url})}>
          <label htmlFor="url">Image URL</label>
          <input type="file"
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
          <button className="ui primary button">Upload</button>
        </div>
      </form>
    );
    return (
      <div>
        { this.state.done ? <Redirect to="/dashboard/ImageByUser" /> : form }
      </div>
    );
  }
}

export default connect(null, { saveImage })(ImageUploadForm);