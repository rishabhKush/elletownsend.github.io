window.onload = function () {
    const ul = document.getElementById('blogs');
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@elletownsend';

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const res = data.items;
            const posts = res.filter(item => item.categories.length > 0);

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
               <a href="${item.link}" title="${item.title}" rel="noopener"><img src="${item.thumbnail}" class="topImg" alt="Blog post thumbnail image"></img>
               <div class="content">
                  <div class="preview">
                     <h2 class="blog_title">${item.title}</h2></a>
										 <button class="moreBtn" type="button" onclick="location.href='${item.link}'" title="${item.title}" rel="noopener">Read More</button>
                  </div>                
               </div>
         </li>`
            });
            ul.innerHTML = output;
        });
}