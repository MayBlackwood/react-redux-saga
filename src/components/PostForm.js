import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleInputChange = (e) => {
        this.setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    render () {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmitClick}>
                <h1>POST FORM</h1>
                <div className="form-group">
                    <label htmlFor="title">Post's Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        name="title"
                        onChange={this.handleInputChange}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create Post</button>
            </form>
        )
    }
}

export default PostForm;
