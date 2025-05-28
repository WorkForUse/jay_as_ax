import { useContext } from "react"
import Post from "./Post"
import {PostList as PostListProviderData} from "../store/PostListStore"

const PostList = () => {

  const {postList} = useContext(PostListProviderData)
  return (
    <div className="d-flex flex-wrap gap-5 mx-4 my-3">
        {postList.map( (dataOFpost,index) => ( <Post key={index} postProp={dataOFpost}/> ) )}
    </div>
  )
}

export default PostList