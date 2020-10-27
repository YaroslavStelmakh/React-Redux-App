 import {CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER, DELETE_POST} from './types'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function deletePost(post) {
    return {
        type: 'DELETE_POST',
        payload: post.id
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

 export function hideLoader() {
     return {
         type: HIDE_LOADER,
     }
 }

export function fetchPosts() {
    return async dispatch => {
        dispatch(showLoader());
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setTimeout(() => {
            dispatch({type: FETCH_POSTS, payload: json});
            dispatch(hideLoader())
        },500)

    }
}