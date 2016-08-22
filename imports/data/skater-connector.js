import rp from 'request-promise';

export const Skaters = {
  getAll () {
    console.log('getAll from Skaters-Conn');  
    const uri = 'http://puckalytics.com/php/getplayerdata2.php?season=201516&sit=5v5&minutes=200&info=1&goal=1&corsi=1&pcts=1&pctteam=1&individual=1&faceoffs=1&';    
    const options = {
      uri,
      json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
      .then((resp)=>{
        return resp;
      })
      .catch((err) => {
        console.error('Throw Skater Connector err', err);
      });
   
  }

}
