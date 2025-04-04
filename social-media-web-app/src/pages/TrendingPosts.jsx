import { useEffect, useState } from "react";
import { getPosts, getComments } from "../api";

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getPosts();
      const comments = await getComments();

      const commentCounts = {};
      comments.forEach(comment => {
        commentCounts[comment.postId] = (commentCounts[comment.postId] || 0) + 1;
      });

      const sortedPosts = posts
        .sort((a, b) => (commentCounts[b.id] || 0) - (commentCounts[a.id] || 0))
        .slice(0, 5);

      setTrendingPosts(sortedPosts);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Trending Posts</h2>
      <ul>
        {trendingPosts.map(post => (
          <li key={post.id} className="mt-2 p-2 border rounded">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingPosts;