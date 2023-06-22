type Data = {
    name: string;
  };

  type Post ={
    _id: string;
    title: string;
    content: string;
  }
  
  type Props = {
    data: Data;
  };
  
  type Posts = {
    allPosts: Post;
  }
