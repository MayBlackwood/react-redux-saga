import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from './../redux/actions';
import Post from './Post';

 class FetchedPosts extends Component {
     constructor(props) {
         super(props);
     }

     componentDidMount() {
         console.log(this.props);
         this.props.loadPosts();
     }

     render() {
        const { fetchedPosts: posts } = this.props;
        
        return (
            <>
                <h1>Fetched Posts</h1>
                { !posts.length
                    ? <h5>There is no posts here yet.</h5>
                    : <div>{posts.map(post => <Post post={post} key={post.key} />)}</div>
                }
            </>
        )
     }
};

const mapStateToProps = (state) => {
    return { fetchedPosts: state.posts.fetchedPosts}
}

const mapDispatchToProps = {
    loadPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
