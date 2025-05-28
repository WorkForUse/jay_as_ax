import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/PostListStore";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="d-flex">
        <Sidebar
          selectedTabProp={selectedTab}
          setSelectedTabProp={setSelectedTab}
        />
        <div style={{ width: "100%" }}>
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
