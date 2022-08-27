import { Head, Html, Main, NextScript } from 'next/document';

export default function document() {
    const isProd = process.env.NODE_ENV === 'production';

    const umamiUrl = process.env.UMAMI_URL;
    const umamiWebsiteId = process.env.UMAMI_WEBSITE_ID;

    return (
        <Html>
            <title>Hubert</title>
            <Head>
                {isProd && umamiWebsiteId && umamiUrl && <script async defer data-website-id={umamiWebsiteId} src={umamiUrl}></script>}
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
