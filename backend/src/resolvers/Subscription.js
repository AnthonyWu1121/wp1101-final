// time(team: String!): [String!]
// adminData: AdminData!

const Subscription = {
    time: {
        subscribe: (parent, { team }, { pubsub }) => {
            return pubsub.asyncIterator(`team ${team}`);
        },
    },

    adminData: {
        subscribe: (parent, args, { pubsub }) => {
            return pubsub.asyncIterator('adminData');
        },
    },
};

export default Subscription;