export default schema = [`
  type SearchResults {
    Player_Name: String,
    Team: String,
    Pos: String,
    GF60: Int,
    CF60: Int,
  }
  type Query {
    data: [SearchResults]
  }
  schema {
    query: Query
  }
`];
