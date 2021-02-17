// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     'ziggy.db.elephantsql.com',
      database: 'mlxilxkn',
      user:     'mlxilxkn',
      password: 'ABp6Ro_HcB1y5I8DWs7s4WlMam2BM9KX'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:     'ziggy.db.elephantsql.com',
      database: 'mlxilxkn',
      user:     'mlxilxkn',
      password: 'ABp6Ro_HcB1y5I8DWs7s4WlMam2BM9KX'
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
      host:     'ziggy.db.elephantsql.com',
      database: 'mlxilxkn',
      user:     'mlxilxkn',
      password: 'ABp6Ro_HcB1y5I8DWs7s4WlMam2BM9KX'
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
