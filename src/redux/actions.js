import axios from 'axios';
import { CREATE_POST, FETCH_POSTS } from './type';

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export const loadPosts = () => {
    return async dispatch => {
        const response = await axios('https://jsonplaceholder.typicode.com/posts?_limit=5');
        dispatch({type: FETCH_POSTS, payload: response.data})
    }
};
