// import { Producers } from '/imports/data/producers-connector';
import { Skaters } from '/imports/data/skater-connector';

const resolvers = {
  Query: {
    async data(root) {
      return Skaters.getAll();
    }
  }
};

export default resolvers;