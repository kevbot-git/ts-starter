import Message from './Message';

export default (a: number, b: number) => {
  const res = Message(a, b);
  console.log('result is', res);

  return res;
};
