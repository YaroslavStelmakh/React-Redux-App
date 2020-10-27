import {CREATE_POST} from './types'
import {FETCH_POSTS} from "./types";
import {DELETE_POST} from "./types";

const initialState = {
    posts : [],
    fetchPosts: []
};

export const postsReducer = (state = initialState, action) => {
    if (action.type === CREATE_POST) {
        return {...state, posts: state.posts.concat(action.payload)};
    } else if (action.type === FETCH_POSTS)
        return {...state, fetchPosts: action.payload};
    else if(action.type === DELETE_POST)
            return {...state, posts: state.posts.pop()};
            else
            return state
};