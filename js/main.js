window.onload = function () {
    const ul = document.getElementById('blogs');
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@_elletownsend';

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const res = data.items;
            const posts = res.filter(item => item.categories.length > 0);
            // console.log(posts);

            function toText(node) {
                let tag = document.createElement('div')
                tag.innerHTML = node;
                node = tag.innerText;
                return node;
            }

            let output = '';
            posts.slice(0, 3).forEach((item) => {
                output += `
         <li class="post">
               <a href="${item.link}"><img src="${item.thumbnail}" class="topImg"></img>
               <div class="content">
                  <div class="preview">
                     <h2 class="blog_title">${item.title}</h2></a>
										 <button class="moreBtn" type="button" onclick="location.href='${item.link}'">Read More</button>
                  </div>                
               </div>
         </li>`
            });
            ul.innerHTML = output;
        });
}

function hideShowNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}