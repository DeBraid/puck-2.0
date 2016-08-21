import React from 'react';
import { connect } from 'react-apollo';

class App extends React.Component {
  render() {
    const { Skaters } = this.props;
    console.log('App render Skaters', Skaters); 

    const skaters = Skaters && Skaters.data;
    console.log('App render(): skaters', skaters); 
    let data = [];

    // let data = _.sortBy(producers, 'registrationRequests' );
    
    return (
      // let { textStyle } = this.style;
      <div className="main-container">
        <h1>Producer Facts</h1>          
        <h3>Registration Requests Total</h3>          
        <div>
          {_.map( data.reverse() , ({ name, registrationRequests }, index) => {
            return (
              <div className="vendor" key={index}>
                <span style={{}}>
                  {name}: 
                </span>
                 {registrationRequests}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    Skaters: {
      query: gql`{
        data {
          Team
        }
      }
      `,
      forceFetch: true,
    }
  }
}

export default connect({mapQueriesToProps})(App);
