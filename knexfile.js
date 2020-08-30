module.exports = {

    development: {
      client: 'mysql',
      connection: {
        // filename: './src/database/db.sqlite'
        port: "8889",
        host: "127.0.0.1",
        database: "pousada",
        user: "root",
        password: "root",
      },
      migrations:{
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };