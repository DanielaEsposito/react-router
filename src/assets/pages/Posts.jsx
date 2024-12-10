import { useEffect } from "react";
import { useState } from "react";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  });
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5 text-center">Post List</h1>
        <div className="row row-cols-3 g-4">
          {posts.map((post) => (
            <div key={post.id} className="col">
              <div className="card">
                <div className="card-img-container">
                  <img
                    src={`http://localhost:3000${post.img}`}
                    className="card-img-top img-fluid img-post"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <p>{post.category}</p>
                  <div className="post-tags">
                    <div className="tag ">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="badge me-3 my-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
