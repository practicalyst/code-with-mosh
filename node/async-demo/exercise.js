// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function displayInfo() {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies);
      console.log("Email sent...");
    }
  }
  
  displayInfo();
  
  function getCustomer(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id, name: "AF", isGold: true, email: "af@af.com" });
      }, 4000);
    });
  }
  
  function getTopMovies() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["movie1", "movie2"]);
      }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    setTimeout(() => {}, 4000);
  }
  