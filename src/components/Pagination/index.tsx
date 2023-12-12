import { PaginationData } from '@/domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link legacyBehavior href={previousLink}>
            <a> Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link legacyBehavior href={nextLink}>
            <a> Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
