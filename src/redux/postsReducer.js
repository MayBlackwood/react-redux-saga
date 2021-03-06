import { CREATE_POST, FETCH_POSTS } from './type';

const initialState = {
    posts: [{title: "post 1", id: 1}, {title: "post 2", id: 2}],
    fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.payload]}
        case FETCH_POSTS:
            return {...state, fetchedPosts: [...state.fetchedPosts, ...action.payload]}
        default: return state
    }

};
