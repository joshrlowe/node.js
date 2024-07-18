getButton = document.getElementById("get");
postButton = document.getElementById("post");

getButton.addEventListener("click", () => {
  fetch("http://localhost:8080/get")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});

postButton.addEventListener("click", () => {
  fetch("http://localhost:8080/post", {
    method: "POST",
    body: JSON.stringify({
      title: "A Codepen Post",
      body: "This is a post created on Codepen",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
