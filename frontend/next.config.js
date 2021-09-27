const API_SERVER = process.env.API_SERVER || `http://localhost:4000`;

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
