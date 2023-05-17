import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// import { sub } from "date-fns";

const POSTS_URL = 'http://localhost:3500/blog'

const initialState = {
    posts: [],
    status: 'idle', // ildle, loading, succeeded, failed
    error: null
}     

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
        const response = await axios.get(POSTS_URL)
        return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    const resposne = await axios.post(POSTS_URL, initialPost)
    return resposne.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
    const { _id } = initialPost
    const response = await axios.put(`${POSTS_URL}/${_id}`)
    return response.data 
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        title,
                        content,
                        userId,
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post._id === postId)
            console.log("action: ", action);
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                console.log(action.payload);
                state.posts.push(action.payload)
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                if(!action.payload?._id){
                    console.log("Update cannot be complete");
                    console.log(action.payload);
                    return
                }
                const { _id } = action.payload
                const posts = state.posts.filter( post => post._id !== _id)
                state.posts = [ ...posts, action.payload]
            })
        // end builder
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error

export const selectPostById = (state, postId) => {
    return state.posts.posts.find(post => post._id === postId)
}

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer