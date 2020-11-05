import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <>
            <h1>Posts</h1>
            { !posts.length
                ? <h5>There is no posts here yet.</h5>
                : <div>{posts.map(post => <Post post={post} key={post.key} />)}</div>
            }
        </>
    )
};

const mapStateToProps = (state) => {
    return {posts: state.posts.posts};
}

export default connect(mapStateToProps, null)(Posts);
