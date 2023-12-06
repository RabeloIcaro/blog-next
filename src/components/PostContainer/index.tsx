import Markdown from 'react-markdown';
import { Container } from './styled';

export type PostProps = {
  content: string;
};

export const PostContainer = ({ content }: PostProps) => {
  return (
    <Container>
      <Markdown>{content}</Markdown>
    </Container>
  );
};
