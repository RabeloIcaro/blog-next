import { markdownToHtml } from '@/utils/markdown-to-html';
import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}/${slugString}?populate=*`;
  const { data: jsonPosts } = await fetchJson<{ data: PostData }>(url);
  const content = await markdownToHtml(jsonPosts.attributes.content);
  const finalContent = { ...jsonPosts, content };
  return [finalContent];
};
