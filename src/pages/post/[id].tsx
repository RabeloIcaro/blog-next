import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <p>{post.attributes.title}</p>;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=100${numberOfPosts}`);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: String(post.id),
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const post = await getPost(ctx.params?.id || '0');
  return {
    props: { post: post },
    // revalidate: 5,
  };
};
