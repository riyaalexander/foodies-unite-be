module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        database: 'riyaalexander',
      },
      migrations: {
        directory: './migrations',
      },
    },
  };
  