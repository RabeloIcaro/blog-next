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
                cover={post.attributes.cover.data.attributes.formats.small.url}
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
