import axios from 'axios';

export default class Api {


    client = () => {
        var client = axios.create({
          baseURL: "https://jsonplaceholder.typicode.com/",
        });
    
        return client;
      };

    getUserByID = (id : any) => {
        return this.client().get(`users/${id}`);
      };
      
    getPicture = (id : any) => {
        return this.client().get(`photos/${id}`);
      };

    getAllPosts = () =>
    {
      return this.client().get(`posts`);
    };

    getPostByID = (id: any) => {
      return this.client().get(`posts/${id}`);
    };

    getComments = () => {
      return this.client().get(`comments`);
    };
}