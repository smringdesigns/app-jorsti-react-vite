import BlogCard from "../components/BlogCard";
import posts from "../data/posts";

export default function Blog() {
  return (
    <section className="blog-container">
      <h1>Blog de JorSti Tech</h1>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
