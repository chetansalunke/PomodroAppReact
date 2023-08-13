import React, { Component } from 'react'
import axios from 'axios';
class Getdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      title: '',
      body: ''
    };
  }
  
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }


  // e pass karne compulsory aahe 
  submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state);

    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(response=>{
      console.log(response)
    }) 
    .then(error=>{
      console.log(error)
    })  
  }

  render() {
    // always write outside of the return
    const { userid, title, body } = this.state

    return (
      <form onSubmit={this.submitHandler}>
        <div>
          UserId <input type='text' value={userid} name='userid' onChange={this.changeHandler}></input>
        </div>
        <div>
          Title <input type='text' value={title} name='title' onChange={this.changeHandler}></input>
        </div>
        <div>
          Body <input type='text' value={body} name='body' onChange={this.changeHandler}></input>
        </div>
        <div>
          <button type='submit' onChange={this.changeHandler}>Submit</button>
        </div>
      </form>
    )
  }
}

export default Getdata
