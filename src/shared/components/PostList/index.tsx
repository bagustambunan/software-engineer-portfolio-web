import { Link } from "react-router-dom";
import type { Post } from "../../../shared/constants/types";
import Carousel from "../Carousel";
import Empty from "../Empty";
import styles from "./style.module.css";
import TagList from "../TagList";
import Image from "../Image";

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div key={post.title} className={styles.postContainer}>
      <div>
        <Image src={post.image} alt={post.title} title={post.title} />
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
  );
};

export default function PostList({
  posts,
  carousel,
}: {
  posts: Post[];
  carousel?: boolean;
}) {
  if (!posts || posts.length === 0) {
    return <Empty />;
  }
  if (carousel)
    return (
      <Carousel
        items={posts.map((post) => (
          <PostItem key={post.title} post={post} />
        ))}
        extra={
          <Link to="https://bagustambunan.medium.com/" target="_blank">
            View All Posts ↗️
          </Link>
        }
      />
    );
  return (
    <div className={styles.postListContainer}>
      {posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </div>
  );
}
