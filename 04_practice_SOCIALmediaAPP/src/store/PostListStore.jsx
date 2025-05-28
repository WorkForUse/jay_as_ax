import { createContext, useReducer } from "react";

export const PostList = createContext(
    {
    postList: [],
    addPost: () => {},
    addAPIPosts: () => {},
    deletePost: () => {},
}
);

const postListReducer = (currPostList,action) => {
    if (action.type === "DELETE_POST") {
       return currPostList.filter((pOsT)=>(
        pOsT.id !== action.payload.PostID)
    )} else if(action.type === "ADD_API_POSTS"){
        return action.payload.posts
    } else if (action.type === "ADD_POST") {
        return [action.payload,...currPostList]
    }
    return currPostList
}

const PostListProvider = ({children}) => {

    const [postList,dispatchPostList] = useReducer(postListReducer,[])

    const addPost = (ID,Title,Description,Reactions,Tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title : Title,
                body : Description,
                reactions: Reactions,
                userId : ID,
                tags : Tags
            }        
        })
    }

    const addAPIPosts = (posts) => {
        dispatchPostList({
            type: "ADD_API_POSTS",
            payload: {
                posts,
            }        
        })
    }

    const deletePost = (PostID) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                PostID,
            }
        })
    }

    return (
        <PostList.Provider value={ { postList , addPost , addAPIPosts , deletePost } }>
            {children}
        </PostList.Provider>
    )
}



export default PostListProvider;