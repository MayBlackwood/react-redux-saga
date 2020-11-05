import React from 'react';
import Post from './Post';

export default ({posts}) => {
    if (!posts.length) {
        return <h5>There is no posts here yet.</h5>
    }
    return (
        <>
            <h1>Posts</h1>
            <div>
                {posts.map(post => <Post post={post} key={post.key} />)}
            </div>
        </>
    )
};
