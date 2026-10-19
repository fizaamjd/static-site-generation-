import Head from 'next/head';
import { getPostData } from '../lib/posts';
export async function getStaticProps() {
  return { props: { postData: getPostData() } };
}
export default function Home({ postData }) {
  return <><Head><title>{postData.data.title || 'Static Site'}</title><meta name="description" content="A local Markdown static generation exercise." /></Head><main><h1>{postData.data.title}</h1><p>{postData.data.date || ''}</p><pre style={{whiteSpace:'pre-wrap'}}>{postData.content}</pre></main></>;
}
