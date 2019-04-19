let { graphql, buildSchema } = require('graphql');

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

graphql(schema, '{ name ,heigth}', root).then((response) => {
  console.log(response);
});