import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="ReplaceAnything as you want: Ultra-high quality content replacement."
          />
          <meta property="og:site_name" content="replaceanything.app" />
          <meta
            property="og:description"
            content="ReplaceAnything as you want: Ultra-high quality content replacement."
          />
          <meta property="og:title" content="Face Photo Replace" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Face Photo Replace" />
          <meta
            name="twitter:description"
            content="ReplaceAnything as you want: Ultra-high quality content replacement."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
