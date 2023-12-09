const {gql} = require("apollo-server");

const typeDef = gql`
type Destinations{
    city: String!
    _id: ID!
}
type Hostels{
    img: String!
    city: String!
}
type Query{
    getDestinations:[Destinations]
    getHostels(city:String!): [Hostels]
}
type Mutation{
    addHostel(img:String!, city:String!):Hostels
    addDestination(city:String): Destinations
}
`

module.exports = typeDef