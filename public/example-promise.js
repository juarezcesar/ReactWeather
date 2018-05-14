// function getTempCallBack(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// };

// getTempCallBack('Sanjo', function (err, temp) {
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromisse (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found 2');
//     }, 1000);
//   });
// }

// getTempPromisse('Sanjo').then(function(temp) {
//   console.log('promisse success',temp);
// }, function(err) {
//   console.log('promisse err', err)
// });



function addPromise (a,b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Not number');
    }
  });
}

addPromise(4,4).then(function(result) {
  console.log('Promise OK', result);
}, function(err) {
  console.log('Promisse Error', err);
})
