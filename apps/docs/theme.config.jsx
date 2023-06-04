export default {
  logo: <strong>Wilayah Nusantara</strong>,
  project: {
    link: 'https://github.com/theodevoid/wilayah-nusantara',
  },
  // primaryHue: 0,
  // ...
  head: () => {
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </>
    );
  },
  banner: {
    text: (
      <p>
        The current data is accurate only up to <strong>2019.</strong>
      </p>
    ),
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © VoidFnc.</span>,
  },
};
