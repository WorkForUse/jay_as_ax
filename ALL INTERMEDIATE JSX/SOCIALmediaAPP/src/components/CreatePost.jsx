import { useContext, useRef } from "react";
import {PostList} from '../store/PostListStore'
const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const userID = useRef()
  const postTilte = useRef()
  const postBody = useRef()
  const postReactions = useRef()
  const postTags = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const ID = userID.current.value;
    const Title = postTilte.current.value;
    const Description = postBody.current.value;
    const Reactions = postReactions.current.value;
    const Tags = postTags.current.value.split(" ");
    addPost(ID,Title,Description,Reactions,Tags);

    userID.current.value = "";
    postTilte.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = "";
  }

  return (
    <div>
      <form className="p-4 gap-5" style={{width:'50%', margin : 'auto'}} onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userID" className="form-label fw-bolder fst-italic">
            User ID
          </label>
          <input
            ref={userID} 
            type="text"
            className="form-control border border-dark"
            id="userID"
            placeholder="Enter userID here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bolder fst-italic">
            POST TiTle
          </label>
          <input
            ref={postTilte} 
            type="text"
            className="form-control border border-dark"
            id="input border border-darkTitle"
            placeholder="Enter title here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label fw-bolder fst-italic">
            POST Description
          </label>
          <textarea
            ref={postBody}
            type="text"
            className="form-control border border-dark"
            id="BodyDESC"
            placeholder="Enter description here..."
          />
        </div>

        <div className="d-flex gap-3">
          <div className="mb-3">
          <label htmlFor="reactions" className="form-label fw-bolder fst-italic">
            Enter your reaction
          </label>
          <input
            ref={postReactions}  
            type="text"
            className="form-control border border-dark"
            id="reactions"
          />
          </div>

          <div className="mb-3">
          <label htmlFor="tags" className="form-label fw-bolder fst-italic">
            Enter your tags
          </label>
          <input
            ref={postTags} 
            type="text"
            className="form-control border border-dark"
            id="tags"
          />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
