export default schema = [`
  type SearchResults {
    Team: String,
  }
  type Query {
    data: [SearchResults]
  }
  schema {
    query: Query
  }
`];
