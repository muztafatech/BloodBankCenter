import { Html, Head, Main, NextScript } from 'next/document';

// bg - [url('../../public/Background1.png')];
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" bg-[#981919] bg-[url('../../public/Pattern.png')] bg-cover h-screen  ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
