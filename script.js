fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => res.json())
  .then((jsonData) => {
    console.log(jsonData.data.children);
    let posts = jsonData.data.children;
    console.log(typeof posts);
    console.log(posts[0]);
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      const thumbnail = document.createElement("img");
      const link = document.createElement("a");
      h2.innerText = post.data.title;
      thumbnail.src = post.data.thumbnail;
      link.href = post.data.url;
      link.innerText = "link to post";
      console.log(post.data.title);
      postDiv.appendChild(h2);
      postDiv.appendChild(thumbnail);
      postDiv.appendChild(link);
      document.body.appendChild(postDiv);
    });
  });
