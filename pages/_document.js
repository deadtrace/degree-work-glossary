import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="halfmoon/halfmoon-variables.min.css" rel="stylesheet" />
        </Head>
        <body data-set-preferred-theme-onload="true">
          <script src="halfmoon/halfmoon.min.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
