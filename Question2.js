// Question1. a, b and c are based on the following two arrays:users and products
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a. Imagine you are getting the above users collection from a MongoDB database.
//     1. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
const newUser = {
  _id: "absce",
  username: "Parm",
  email: "parm@gmail.com",
  password: "12456",
  createdAt: "18/08/2021 10:00 AM",
  isLoggedIn: false,
};

function SignUp(users, data) {
  const found = users.some(
    (el) => el.username === data.username && el._id === data._id
  );
  if (!found) {
    users.push(data);
    return users;
    console.log("Signup successfully");
  } else {
    console.log("You have already an account");
  }
}
SignUp(users, newUser);

//     2. Create a function called ***signIn*** which allows user to sign in to the application
const email = "thomas@thomas.com";
const password = 123333;
function SignIn(data, email, password) {
  const found = data.find((user) =>
    email === user.email && password === user.password ? true : false
  );

  if (!found) {
    console.log("your Credential is not found so please SignUp");
  } else {
    found.isLoggedIn
      ? console.log("You are already Login")
      : console.log("User LoggeIn successfully");
  }
}

SignIn(users, email, password);

// b. The products array has three elements and each of them has six properties.
//     1. Create a function called ***rateProduct*** which rates the product
const newRate = { userId: "zwf8md", rate: 5 };

function rateProduct(products, productId, rates) {
  const foundProduct = products.find((product) => product._id === productId);

  if (!foundProduct) {
    console.log("We can't find your product");
  }
  foundProduct.ratings.push(rates);
  console.log(products);
}
rateProduct(products, "aegfal", newRate);

//     2. Create a function called ***averageRating*** which calculate the average rating of a product
function averageRating(products) {
  for (let i = 0; i < products.length; i++) {
    let totalRate = 0;
    for (let j = 0; j < products[i].ratings.length; j++) {
      totalRate = totalRate + products[i].ratings[j].rate;
    }

    console.log(totalRate / products[i].ratings.length);
  }
}

averageRating(products);

// c. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(products, productId, userId) {
  const foundProduct = products.find((product) => product._id === productId);
  if (!foundProduct) {
    console.log("product not found");
  } else {
    foundProduct.likes.push(userId);
  }
  console.log(products);
}

likeProduct(products, "hedfcg", "zwf8md");
