import React from 'react';
import Post from './Post';

export default ({posts}) => {
    return (
        <>
            <h1>Fetched Posts</h1>
            { !posts.length
                ? <h5>There is no posts here yet.</h5>
                : <div>{posts.map(post => <Post post={post} key={post.key} />)}</div>
            }
        </>
    )
};
