import { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userID = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const ID = userID.current.value;
    const Title = postTitle.current.value;
    const Description = postBody.current.value;
    const Reactions = parseInt(postReactions.current.value) || 0; // ✅ fix
    const Tags = postTags.current.value.split(" ");

    addPost(ID, Title, Description, Reactions, Tags);

    userID.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = "";
  };

  return (
    <div>
      <form className="p-4 gap-5" style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label fw-bolder fst-italic">User ID</label>
          <input ref={userID} type="text" className="form-control border border-dark" id="userID" placeholder="Enter userID here..." />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bolder fst-italic">POST Title</label>
          <input ref={postTitle} type="text" className="form-control border border-dark" id="title" placeholder="Enter title here..." />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label fw-bolder fst-italic">POST Description</label>
          <textarea ref={postBody} className="form-control border border-dark" id="BodyDESC" placeholder="Enter description here..." />
        </div>

        <div className="d-flex gap-3">
          <div className="mb-3">
            <label htmlFor="reactions" className="form-label fw-bolder fst-italic">Enter your reaction (number)</label>
            <input ref={postReactions} type="number" className="form-control border border-dark" id="reactions" />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label fw-bolder fst-italic">Enter your tags</label>
            <input ref={postTags} type="text" className="form-control border border-dark" id="tags" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
