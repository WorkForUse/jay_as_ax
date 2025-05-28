import { act, createContext, useReducer } from "react";

export const PostList = createContext(
    {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
}
);

const postListReducer = (currPostList,action) => {
    if (action.type === "DELETE_POST") {
       return currPostList.filter((pOsT)=>(
        pOsT.id !== action.payload.PostID)
    )} else if(action.type === "ADD_POST"){
       return [action.payload,...currPostList]
    }
    return currPostList
}

const PostListProvider = ({children}) => {

    const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)

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

    const deletePost = (PostID) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                PostID,
            }
        })
    }

    return (
        <PostList.Provider value={
            {
                postList : postList,
                addPost : addPost,
                deletePost : deletePost
            }
        }>
            {children}
        </PostList.Provider>
    )
}

const DEFAULT_POST_LIST =[
    {
    id:1,
    title : 'Go to Gym',
    body : 'Doing Complete Exercise',
    reactions: 3,
    userId : 'user_19',
    tags : ['bicep','tricep']
    },
    {
    id:2,
    title : 'Go to Morning walk',
    body : 'Doing Complete warm-UP',
    reactions: 5,
    userId : 'user_11',
    tags : ['cardio','flexibility']
    }
]

export default PostListProvider;