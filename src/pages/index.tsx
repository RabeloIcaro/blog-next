import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';
import { getAllPosts } from '@/data/posts/get-all-posts';
import HomePage from '@/containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'SUA_URL/api/posts?populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10',
  );

  return {
    props: { posts },
    // revalidate: 5,
  };
};
