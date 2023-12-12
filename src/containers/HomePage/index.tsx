import Head from 'next/head';
import { PostData } from '@/domain/posts/post';
import { AllPostsLinks, Category, Container } from './styles';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PorstCard';
import { Footer } from '@/components/Footer';
import { SITE_NAME } from '@/config/app-config';
import { PaginationData } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination/index';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Head>
        {' '}
        <title>
          {category ? `${category} - ${SITE_NAME}` : SITE_NAME}{' '}
          {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
        </title>
        <meta name="description" content="Este é meu blog de tecnologia" />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
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
        {pagination && <Pagination {...pagination} />}
        {!pagination?.nextPage && (
          <Link
            legacyBehavior
            href="/post/page[...param]"
            as={'/post/page/1'}
            passHref
          >
            <AllPostsLinks> Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
