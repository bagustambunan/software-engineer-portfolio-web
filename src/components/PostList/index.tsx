import { Link } from "react-router-dom";
import type { Post } from "../../constants/types";
import Carousel from "../Carousel";
import Empty from "../Empty";
import styles from "./style.module.css";
import TagList from "../TagList";

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return <Empty />;
  }
  return (
    <Carousel
      items={posts.map((post) => (
        <div key={post.title} className={styles.postContainer}>
          <div>
            <img src={post.image} alt={post.title} title={post.title} />
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>

            <div>
              <TagList tags={post.tags} />
              {/* <span>{formatFullDate(post.date)}</span> */}
            </div>
            <Link to={post.link} target="_blank">
              View Post ↗️
            </Link>
          </div>
        </div>
      ))}
      extra={
        <Link to="https://bagustambunan.medium.com/" target="_blank">
          View All Posts ↗️
        </Link>
      }
    />
  );
}
