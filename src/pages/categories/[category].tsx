import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category?: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(
    `populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10`,
  );

  const filtro = posts.filter(
    (post) => post.attributes.category.name == ctx.query.category,
  );

  return {
    props: { posts: filtro, category: ctx.query.category },
  };
};
