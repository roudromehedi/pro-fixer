import axios from "axios";

const url = "http://localhost:5000/api/posts/";

/* eslint-disable no-async-promise-executor */

class PostService {
  // get posts

  static async getPosts() {
    try {
      const res = await axios.get(url);
      const data = res.data;

      return data.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
    } catch (err) {
      return err;
    }
  }
  //Create post
  static insertPost(text) {
    return axios.post(url, {
      text,
    });
  }

  //register
  static register(firstName, lastName, email, password) {
    return axios.post(url, {
      firstName,
      lastName,
      email,
      password,
    });
  }

  //delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
