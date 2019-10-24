/* Async Await 형식으로 바꾸기 */

// (async function() {
//   const customer = await getCustomer1(1);
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     const topMovie = await getTopMovies1();
//     console.log("Top movies: ", topMovie);
//     const sendMail = await sendEmail1(customer.email, topMovie);
//     console.log("Email sent...");
//   }
// })();

// function getCustomer1(id) {
//   //console.log("getCustomer1을 호출중...");
//   const customer = [
//     {
//       id: 1,
//       name: "Mosh Hamedani",
//       isGold: true,
//       email: "email@email.com"
//     }
//   ];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const customer1 = customer.find(customer1 => customer1.id === id);
//       if (customer1) resolve(customer1);
//       else reject(new Error("customer를 찾을 수 없음"));
//     }, 4000);
//   });
// }

// function getTopMovies1() {
//   //console.log("getTopMovie1을 호출중...");
//   const movies = ["movie1", "movie2"];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const movie = movies;
//       if (movie) resolve(movie);
//       else reject(new Error("Movie를 찾을 수 없음"));
//     }, 4000);
//   });
// }

// function sendEmail1(email, movies) {
//   //console.log("sendEmail1을 호출중...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const email1 = email;
//       const movie1 = movies;
//       console.log(email1, movie1);
//     }, 4000);
//   });
// }
/******************************** 선생님 코드 ********************************/
(async function() {
  const customer = await getCustomer2(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    const topMovies = await getToeMovies2();
    console.log("Top movies: ", topMovies);
    const sendEmail = sendEmail2(customer.email, topMovies);
    console.log("Sent mail...");
  }
})();
function getCustomer2(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email@email.com"
      });
    }, 2000);
  });
}
function getToeMovies2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}
function sendEmail2(email, movies) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
