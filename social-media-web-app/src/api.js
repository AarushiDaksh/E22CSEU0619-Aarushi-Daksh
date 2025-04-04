import axios from "axios";

const API_BASE = "http://20.244.56.144/evaluation-service";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ3OTQ3LCJpYXQiOjE3NDM3NDc2NDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFiYmRhOGM3LWI4NDYtNGZjMy04NjMzLTQwZWU0MjM3ZWExMyIsInN1YiI6ImUyMmNzZXUwNjE5QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTA2MTlAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoiYWFydXNoaSBkYWtzaCIsInJvbGxObyI6ImUyMmNzZXUwNjE5IiwiYWNjZXNzQ29kZSI6InJ0Q0haSiIsImNsaWVudElEIjoiYWJiZGE4YzctYjg0Ni00ZmMzLTg2MzMtNDBlZTQyMzdlYTEzIiwiY2xpZW50U2VjcmV0IjoiTkFZc1pQVFl1ZmtUTWZVdiJ9.9vTQIeEq6vwIa9HZqWoWCCn-uniP01GhjRJsPpFRiIs"; 

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    "Content-Type": "application/json",
  },
});

// posts
export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    console.log("Fetched Posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.response ? error.response.data : error.message);
    return [];
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    console.log("Fetched Users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.response ? error.response.data : error.message);
    return [];
  }
};

// comments
export const getComments = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}/comments`);
    console.log(`Comments for Post ${postId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error.response ? error.response.data : error.message);
    return [];
  }
};

// posts
export const getPostsByUserId = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/posts`);
    console.log(`Posts for User ${userId}:`, response.data);
    return response.data.posts || [];
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error.response ? error.response.data : error.message);
    return [];
  }
};
