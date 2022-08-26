import { Head, Html, Main, NextScript } from 'next/document';

export default function document() {
    const isProd = process.env.NODE_ENV === 'production';

    return (
        <Html>
            <title>Hubert</title>
            <Head>
                {isProd && (
                    <script async defer data-website-id="28645678-789e-4472-aa3c-b54e4fe686ae" src="https://umami.finndore.dev/umami.js"></script>
                )}
                <meta name="description" content="Hubert" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content="/hubert-selfie.png" />
                <meta name="theme-color" content="#f9a038" />
                <meta name="twitter:card" content="summary_large_image"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
