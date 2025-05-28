import { useContext } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { PostList } from "../store/PostListStore";

const Post = ({ postProp }) => {
  const { deletePost } = useContext(PostList);

  const renderReactions = () => {
    if (typeof postProp.reactions === 'object' && postProp.reactions !== null) {
      return `👍 ${postProp.reactions.likes ?? 0} 👎 ${postProp.reactions.dislikes ?? 0}`;
    }
    return postProp.reactions;
  };

  return (
    <div>
      <div className="card my-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {postProp.title}
            <span
              onClick={() => deletePost(postProp.id)}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
              style={{ cursor: "pointer" }}
            >
              <IoTrashBinSharp />
            </span>
          </h5>
          <p className="card-text">{postProp.body}</p>

          <div
            className="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
              {renderReactions()}
            </span>
            <div>
              {postProp.tags.map((tag, idx) => (
                <span key={idx} className="badge text-bg-dark mx-1">
                  {tag}
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
