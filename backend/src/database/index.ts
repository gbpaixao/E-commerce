import knex, { Knex } from 'knex'

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host : 'ec2-52-0-114-209.compute-1.amazonaws.com',
    user : 'gdyxucnpvukutb',
    password : 'dab173cdf399420eb9c3e1e4e0cb19b7f37ab498aa618b7796190863f2048e6e',
    database : 'decj3lf5bj81im',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  }
}

export default knex(config).withSchema("redsAju")