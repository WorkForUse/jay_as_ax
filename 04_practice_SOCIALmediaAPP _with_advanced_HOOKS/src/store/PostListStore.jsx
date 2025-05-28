import { createContext, useCallback, useReducer, useState, useEffect } from "react";

export const PostList = createContext(
    {
        postList: [],
        Fetching4LoadingSpinner: false,
        addPost: () => { },
        deletePost: () => { },
    }
);

const postListReducer = (currPostList, action) => {
    if (action.type === "DELETE_POST") {
        return currPostList.filter((pOsT) => (
            pOsT.id !== action.payload.PostID)
        )
    } else if (action.type === "ADD_API_POSTS") {
        return action.payload.posts
    } else if (action.type === "ADD_POST") {
        return [action.payload, ...currPostList]
    }
    return currPostList
}

const PostListProvider = ({ children }) => {

    // ////////////////////
    const [Fetching4LoadingSpinner, SET_Fetching4LoadingSpinner] = useState(false);
    // ///////////////////

    const [postList, dispatchPostList] = useReducer(postListReducer, [])

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post
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

    const deletePost = useCallback((PostID) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                PostID,
            }
        })
    }, [dispatchPostList])

    // 
    useEffect(() => {
        SET_Fetching4LoadingSpinner(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addAPIPosts(data.posts);
                SET_Fetching4LoadingSpinner(false);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Fetch error:', error);
                    SET_Fetching4LoadingSpinner(false);
                }
            });

        return () => {
            console.log("Cleaning up useEffect");
            controller.abort();
        };
    }, []);
    // 

    return (
        <PostList.Provider value={{ Fetching4LoadingSpinner, postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    )
}



export default PostListProvider;