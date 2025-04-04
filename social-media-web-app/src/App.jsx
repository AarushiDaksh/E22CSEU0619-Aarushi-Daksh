import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./3d";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-8">
        📊 Social Media Analytics
      </h1>

      {/* 3D Model Canvas */}
      <div className="w-full max-w-5xl h-[400px] mb-10 rounded-xl overflow-hidden border border-indigo-500 shadow-lg">
        <Canvas
          shadows
          camera={{ position: [2, 2, 5], fov: 50 }}
          style={{ background: "#000000" }} // black background
        >
          <ambientLight intensity={0.5} />
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-wrap justify-center gap-4">
        <Link
          to="/top-users"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition duration-200"
        >
          Top Users
        </Link>
        <Link
          to="/trending-posts"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow transition duration-200"
        >
          Trending Posts
        </Link>
        <Link
          to="/feed"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl shadow transition duration-200"
        >
          Live Feed
        </Link>
      </nav>
    </div>
  );
}

export default App;
