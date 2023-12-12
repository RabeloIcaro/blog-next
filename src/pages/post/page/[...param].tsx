import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PaginationData } from '@/domain/posts/pagination';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
  filteredPosts?: string;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;
  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;
  const nextPage = page + 1;
  const previousPage = page - 1;
  const urlQuery = `populate=*&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}`;
  const posts = await getAllPosts(urlQuery);
  const filteredPosts = posts.filter(
    (post) => post.attributes.category.name == category,
  );
  const numberOfPosts = Number(await countAllPosts());
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, filteredPosts, pagination, category },
    // revalidate: 5,
  };
};
