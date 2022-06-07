fetch("https://www.reddit.com/r/aww/.json")
  .then((res) => res.json())
  .then((jsonData) => {
    let posts = jsonData.data.children;
    let first10 = posts.slice(0, 10);
    console.log(first10);
    first10.forEach((post) => {
      //   console.log(post.data);
      const postDiv = document.createElement("div");
      const innerDiv = document.createElement("div");
      const h2 = document.createElement("h2");
      const thumbnail = document.createElement("img");
      const p = document.createElement("p");
      const link = document.createElement("a");
      h2.innerText = post.data.title;
      thumbnail.src = post.data.thumbnail;
      link.href = post.data.url;
      link.innerText = "link to post";
      p.innerText = post.data.selftext;
      //   console.log(post.data.selftext);
      postDiv.appendChild(h2);
      postDiv.appendChild(thumbnail);
      postDiv.append(p);
      postDiv.appendChild(innerDiv);
      postDiv.appendChild(link);
      document.body.appendChild(postDiv);
    });
  });
