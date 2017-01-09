export const ROOT_URL = 'http://jsonplaceholder.typicode.com';

class Service {
	byId = (id) => `http://jsonplaceholder.typicode.com/posts/${id}`
  all = () => 'http://jsonplaceholder.typicode.com/posts'
};

export const PostsService = new Service();
