import { PostData } from '@/domain/posts/post';
import { Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PorstCard';
import { Footer } from '@/components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.attributes.slug}
                cover={
                  'https://res.cloudinary.com/dgio5rheq/image/upload/v1699889492/thumbnail_IMG_20140725_140603675_ef3af8d362.jpg?updatedAt=2023-11-13T15%3A31%3A32.806Z'
                }
                id={String(post.id)}
                title={post.attributes.title}
              />
            );
          })}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
