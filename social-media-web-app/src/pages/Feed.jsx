import { useEffect, useState } from "react";
import { getPosts } from "../api";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      setPosts(posts);
    }

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Live Feed</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mt-2 p-2 border rounded">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;