const {gql} = require("apollo-server");
const hostels = require("../models/Hostels");
const destinations = require("../models/Destinations")

const resolvers = {

Query:{
    getDestinations: async()=>(await destinations.find()),
    getHostels: async(parent,{city})=>(await hostels.find({city: city}))
}
,
Mutation:{
    addHostel: async(parent, args)=>{
        const {img, city} = args;
        const newHostel = new hostels({
            img, city
        });

        await newHostel.save();
        return newHostel;
    },

    addDestination:async(parent, args)=>{
        const {city} = args;
        const newLocation = new destinations({
            city
        });
        await newLocation.save();
        return newLocation
    }
}

}


module.exports = resolvers;