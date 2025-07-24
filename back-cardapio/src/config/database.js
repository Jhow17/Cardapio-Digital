export default{
    dialect:'postgres',
    host: 'localhost',
    port: 5432,
    username:'postgres',
    password:'secretpassword',
    database:'newbarracadb',
    define:{timestamp:true,
        underscored : true,
        underscoredAll: true
    }
}