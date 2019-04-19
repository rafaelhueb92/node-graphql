let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    name: String,
    age: Int,
    heigth: Int,
    weigth: Int
  }
`);

let root = { name: 'Rafael',
             age:26,
             heigth:188,
             weigth:200};

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const port = 4000;

app.listen(port, () => console.log(`servidor rodando em localhost:${port}/graphql`));