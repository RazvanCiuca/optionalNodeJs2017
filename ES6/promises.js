const startCountdownTillNewYear = function(step, id) {
  return new Promise((resolve, reject) => {
      if (step > 0) {
          setTimeout(() => {
              resolve(step - 1);
          }, 1000)
      } else {
          setTimeout(() => {
              reject('done');
          }, 5000);
      }
  })
      .then((success) => {
          console.log(id + ': ', success + '!');
          return startCountdownTillNewYear(success, id);
      }, (error) => {
          console.log(`It's already the new year :(`)
      });
};

 //startCountdownTillNewYear(10, 'First counter');

const fakeHttpRequest = function() {
    const timeToLive = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timeToLive);
        }, timeToLive * 1000);
    })
};

Promise.all([
    fakeHttpRequest(),
    fakeHttpRequest(),
    fakeHttpRequest()
]).then((success) => {
     //console.log(success);
    //TODO for students: display the request which took the longest to complete
});

Promise.race([
    fakeHttpRequest(),
    fakeHttpRequest(),
    fakeHttpRequest()
]).then((success) => {
     console.log(success);
});