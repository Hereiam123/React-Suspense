const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log("The user data is " + JSON.stringify(data));
  } catch (err) {
    console.log("The user error is " + err);
  }
};

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("The post data is " + JSON.stringify(data));
  } catch (err) {
    console.log("The post error is " + err);
  }
};
