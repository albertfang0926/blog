export const siteConfig = {
  author: 'Albert Fang',
  title: 'Vitesse theme for Astro',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/blog/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'kieranwme@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/kieranwv/astro-theme-vitesse',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: '',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: '',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: '',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: '',
      icon: 'i-simple-icons-youtube',
    },
  ],
  header: {
    logo: {
      src: '/blog/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog/blog',
      },
      {
        text: 'Notes',
        href: '/blog/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/blog/talks',
      },
      {
        text: 'Projects',
        href: '/blog/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog/blog',
      },
      {
        text: 'Notes',
        href: '/blog/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/albertfang0926',
      },
    ],
  },
}

export default siteConfig
