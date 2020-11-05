import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmitClick}>
                <h1>POST FORM</h1>
                <div className="form-group">
                    <label htmlFor="title">Post's Title</label>
                    <input type="text" className="form-control" id="title"></input>
                </div>
                <button className="btn btn-success" type="submit">Create Post</button>
            </form>
        )
    }
}

export default PostForm;
