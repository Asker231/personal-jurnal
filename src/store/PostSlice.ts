import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState{
    posts:IPost[]
}

interface IPost{
    id:string
    title:string
    date:string
    text:string
}

const initialState:IState = {
    posts:[]
}

const PostSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost(state,action:PayloadAction<IPost>){
            state.posts.push(action.payload)
        }
    }
})

export const {addPost} = PostSlice.actions
export default PostSlice.reducer