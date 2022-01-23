import { IncomingMessage, ServerResponse } from 'http';
import { useBody } from 'h3';

export default async (req: IncomingMessage, _: ServerResponse) => {
  const { inputText } = await useBody<PostType>(req);
  console.log('Post text: ', inputText)
  return {
    inputText,
  }
}