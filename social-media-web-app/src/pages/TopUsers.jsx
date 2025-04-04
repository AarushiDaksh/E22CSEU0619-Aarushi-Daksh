import { useEffect, useState } from "react";
import { getPostsByUserId } from "../api";

//hard coded for users
const USER_IDS = [1, 2, 3, 4, 5]; 

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const postCounts = {};
      for (const userId of USER_IDS) {
        const posts = await getPostsByUserId(userId);
        postCounts[userId] = posts.length;
      }

      
      const sortedUsers = Object.entries(postCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([userId]) => ({
          id: userId,
          name: `User ${userId}`, 
        }));

      setTopUsers(sortedUsers);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Top 5 Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id} className="mt-2 p-2 border rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;