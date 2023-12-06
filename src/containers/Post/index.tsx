import { Comments } from '@/Comments';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { Heading } from '@/components/PostHeading';
import { PostData } from '@/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.small.url}
          alt={post.attributes.title}
        />

        <PostDetails
          date={post.attributes.createdAt}
          author={post.attributes.author.name}
          category={post.attributes.category.name}
        />

        <PostContainer content={post.attributes.content} />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContainer>
      <Footer />
    </>
  );
};
