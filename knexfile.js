module.exports = {

    development: {
      client: 'mysql',
      connection: {
        // filename: './src/database/db.sqlite'
        port: "3306",
        host: "127.0.0.1",
        database: "pousada",
        user: "root",
        password: "",
      },
      migrations:{
        directory: './src/database/migrations'
      },
      seeds:{
        directory: './src/database/seed'
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