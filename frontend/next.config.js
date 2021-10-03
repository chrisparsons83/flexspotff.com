const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER || `http://localhost:3001`;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        basePath: false,
        destination: `${API_SERVER}/login/discord`,
        source: '/login',
        permanent: true,
      },
    ];
  },
};
