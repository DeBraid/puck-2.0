import React from 'react';
import { connect } from 'react-apollo';

class App extends React.Component {
  render() {
    const { Skaters } = this.props;
    const skaters = Skaters && Skaters.data;
    console.log('App render(): skaters', skaters); 
    let data = _.sortBy(skaters, 'GF60' );
    return (      
      <div className="main-container">
        <h1>Puck 2.0</h1>          
        <div>
          {_.map( data.reverse() , ({ Player_Name, Team, Pos, GF60, CF60 }, index) => {
            return (
              <div className="vendor" key={index}>
                <span style={{}}>
                  {Player_Name}, {Team}, {Pos}, {GF60}, {CF60},
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapQueriesToProps() {
  let gq = `data {
    Player_Name, Team, Pos, GF60, CF60
  }`
  return {
    Skaters: {
      query: gql`{${gq}}`,
      forceFetch: true,
    }
  }
}

export default connect({mapQueriesToProps})(App);
