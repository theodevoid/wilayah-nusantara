import { useRouter } from 'next/router';

const config = {
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
        ⚠️ Due to financial issues, our free hosted API at{' '}
        <a href="https://api.wilayah-nusantara.id">
          https://api.wilayah-nusantara.id
        </a>{' '}
        has been shut down. ⚠️
      </p>
    ),
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © VoidFnc.</span>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Wilayah Nusantara',
        description: 'Wilayah Nusantara | %s',
      };
    }
    return {
      titleTemplate: 'Wilayah Nusantara - Data wilayah Indonesia',
      description:
        "Wilayah Nusantara provides data regarding Indonesia's region",
    };
  },
};

export default config;
