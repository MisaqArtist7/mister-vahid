import getPosts from "@/src/services/posts.service";
import { Suspense } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function Articles() {
  const posts: Post[] = (await getPosts()) ?? []; // nunlish

  return (
    <>
      {posts.map(post => (
        <div key={post.id} className="bg-white shadow p-3 rounded my-3">
          <h1>{post.id}: {post.title}</h1>
        </div>
      ))}
    </>
  );
}

export default function HomePage() {
  return (
    <div className="container">
      <div className="bg-white shadow p-3 h-20 flex-row-center ">Header</div>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Articles />
        </Suspense>
    </div>
  );
}

