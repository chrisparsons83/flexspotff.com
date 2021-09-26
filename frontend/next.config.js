module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        basePath: false,
        destination: 'http://localhost:3001/login/discord',
        source: '/login',
        permanent: true,
      },
    ];
  },
};
