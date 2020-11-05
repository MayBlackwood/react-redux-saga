import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import Post from './components/Post';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col"><Posts posts={[{title: 1, id: 1}, {title: 2, id: 2}]}/></div>
        <div className="col"><FetchedPosts posts={[{title: 1, id: 1}, {title: 2, id: 2}]} /></div>
      </div>
    </div>
  );
}

export default App;
