import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListProviderData } from "../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, Fetching4LoadingSpinner } = useContext(PostListProviderData);
  
  return (
    <div className="d-flex flex-wrap gap-5 mx-4 my-3">
      {Fetching4LoadingSpinner && <LoadingSpinner />}
      {!Fetching4LoadingSpinner && postList.length === 0 && <WelcomeMessage />}
      {!Fetching4LoadingSpinner && postList.map((dataOFpost, index) => (
        <Post key={index} postProp={dataOFpost} />
      ))}
    </div>
  );
};

export default PostList;
