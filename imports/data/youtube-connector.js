// import rp from 'request-promise';
// export const Youtube = {
//   search(keyword) {
//     const maxResults = 25;
//     // const key = "AIzaSyCWx8epSrJ8dvlLn7YutD5qB2y_FBrEaRg";
//     // const uri = "https://www.googleapis.com/youtube/v3/search";
//     const lift_uri = "https://lift.co/api/producers/";
//     // const request = {
//     //   key,
//     //   part: "snippet",
//     //   maxResults,
//     //   order: "viewCount",
//     //   q: keyword,
//     //   type: "video",
//     //   videoEmbeddable: true
//     // };
//     const options = {
//       lift_uri,
//       // qs: request,
//       headers: {
//         'User-Agent': 'Request-Promise'
//       },
//       json: true // Automatically parses the JSON string in the response
//     };
//     return rp(options).then((res) => {
//       console.log('res', res[0]);
//       // return res.items.map(({ snippet, id }) => {
//       //   const videoId = id.videoId;
//       //   return { videoId, ...snippet };
//       // });
//     }).catch((err) => {
//       console.error(err);
//     });
//   }
// };
