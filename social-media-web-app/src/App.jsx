import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Social Media Analytics</h1>
      <nav className="space-x-4">
        <Link to="/top-users" className="bg-blue-500 text-white px-4 py-2 rounded">
          Top Users
        </Link>
        <Link to="/trending-posts" className="bg-green-500 text-white px-4 py-2 rounded">
          Trending Posts
        </Link>
        <Link to="/feed" className="bg-yellow-500 text-white px-4 py-2 rounded">
          Live Feed
        </Link>
      </nav>
    </div>
  );
}

export default App;