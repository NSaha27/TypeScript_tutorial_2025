let posts: Array<object> = [];

class Post {
  constructor(
    public title: string,
    public date: string,
    public author: string,
    public description: string,
    public images: Array<string>,
  ) {
    this.title = title;
    this.date = date;
    this.author = author;
    this.description = description;
    this.images = images;
  }

  savePost() {
    const curPosts = posts ? [...posts] : [];
    curPosts.push({
      title: this.title,
      date: this.date,
      author: this.author,
      description: this.description,
      images: this.images,
    });
    try {
      posts = curPosts;
      return true;
    } catch (err: any) {
      console.error("***unable to save the post, error:", err.message);
      return false;
    }
  }
}

export default Post;
