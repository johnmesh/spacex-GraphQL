import { Head, Html, Main, NextScript } from 'next/document'

const globalStyles = `
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }`

export default function Document() {
  return (
    <Html>
      <Head>
        <style type="text/css">{globalStyles}</style>
      </Head>
      <body className="h-full w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
