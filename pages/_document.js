import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="nb-NO">
        <Head />
        <body className="font-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
