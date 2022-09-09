import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta charset="UTF-8"></meta>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}