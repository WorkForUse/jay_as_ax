// import { useContext, useState } from "react"
import { useContext, useEffect , useState } from "react"
import Post from "./Post"
import { PostList as PostListProviderData } from "../store/PostListStore"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {

  const { postList , addAPIPosts } = useContext(PostListProviderData)

  const [Fetching4LoadingSpinner,SET_Fetching4LoadingSpinner] = useState(false) 

  // advanced useEffect with useEffect cleanUp
  useEffect(()=>{
    SET_Fetching4LoadingSpinner(true)
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data => {
        addAPIPosts(data.posts)
        SET_Fetching4LoadingSpinner(false)
      })

      
      return () => {
        console.log("Cleaning up useEffect");
        controller.abort()
      }
      
      // useEffect(()=>{
      //   SET_Fetching4LoadingSpinner(true)
      //   fetch('https://dummyjson.com/posts')
      //     .then(res => res.json())
      //     .then(data => {
      //       addAPIPosts(data.posts)
      //       SET_Fetching4LoadingSpinner(false)
      //     })
  },[])

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       addAPIPosts(data.posts)
  //     })
  // },[])


  // const [dataFetched,setDataFetched] = useState(false) /// NOW useEFFECT use 

  // if(!dataFetched){
  //   fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       addAPIPosts(data.posts)
  //     })
  //     setDataFetched(true)
  // }

  // const onGetPostsClick = () => {
  //   fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       addAPIPosts(data.posts)
  //     });
  // }

  return (
    <div className="d-flex flex-wrap gap-5 mx-4 my-3">
      {Fetching4LoadingSpinner && <LoadingSpinner/>}
      {/* {postList.length === 0 && <WelcomeMessage onGetPostsClick={onGetPostsClick} />} */}
      {!Fetching4LoadingSpinner && postList.length === 0 && <WelcomeMessage />}
      {!Fetching4LoadingSpinner && postList.map((dataOFpost, index) => (<Post key={index} postProp={dataOFpost} />))}
    </div>
  )
}

export default PostList