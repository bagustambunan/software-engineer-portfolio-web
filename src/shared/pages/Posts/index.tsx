import PostList from '../../components/PostList'
import { posts } from '../../constants/post'

export default function PostsPage() {
  return (
    <PostList posts={posts} />
  )
}