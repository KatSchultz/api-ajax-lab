const submitBtn = document.getElementById("submit");
const userInput = document.getElementById("input");

const getData = fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => res.json())
  .then((jsonData) => {
    return jsonData;
  });

//FIRST DISPLAY OF AWW
const displayPosts = getData.then((jsonData) => {
  let posts = jsonData.data.children;
  let first10 = posts.slice(0, 10);
  first10.forEach((post) => {
    const postDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const thumbnail = document.createElement("img");
    const link = document.createElement("a");
    h2.innerText = post.data.title;
    thumbnail.src = post.data.thumbnail;
    link.href = post.data.url;
    link.innerText = "link to post";
    postDiv.appendChild(h2);
    postDiv.appendChild(thumbnail);
    postDiv.appendChild(link);
    document.body.appendChild(postDiv);
  });
  return jsonData;
});

//CLICK HANDLER
submitBtn.addEventListener("click", () => {
  let newSub = input.value;
  fetch(`https://www.reddit.com/r/${newSub}/.json`)
    .then((res) => res.json())
    .then((jsonData) => {
      let posts = jsonData.data.children;
      let first10 = posts.slice(0, 10);
      for (let i = 0; i < first10.length; i++) {
        document.body.lastChild.remove();
      }
      first10.forEach((post) => {
        const postDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const thumbnail = document.createElement("img");
        const link = document.createElement("a");
        h2.innerText = post.data.title;
        thumbnail.src = post.data.thumbnail;
        link.href = post.data.url;
        link.innerText = "link to post";
        postDiv.appendChild(h2);
        postDiv.appendChild(thumbnail);
        postDiv.appendChild(link);
        document.body.appendChild(postDiv);
      });
      return jsonData;
    });
});
