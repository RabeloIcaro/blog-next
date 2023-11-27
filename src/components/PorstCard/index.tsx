import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
  id: string;
  title: string;
  cover: string;
};

export const PostCard = ({ id, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link legacyBehavior href="/post/[id]" as={`/post/${id}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link legacyBehavior href="/post/[id]" as={`/post/${id}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
