import { useContext } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { PostList } from "../store/PostListStore";
const Post = ({ postProp }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {postProp.title}
            <span onClick={() => deletePost(postProp.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              <IoTrashBinSharp  style={{cursor:'pointer'}}/>
            </span>
          </h5>
          <p className="card-text">{postProp.body}</p>
          
          <div
            className="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
               {postProp.reactions}
            </span>
            <div>
            {postProp.tags.map((haSHtagS, indx) => (
            <span key={indx} className="badge text-bg-dark mx-1">
              {haSHtagS}
            </span>
            ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Post;
