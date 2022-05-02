// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let urls = { in :"http://masai-mock-api.herokuapp.com/news/top-headlines?country=in",
    ch:"http://masai-mock-api.herokuapp.com/news/top-headlines?country=ch",
    us:"http://masai-mock-api.herokuapp.com/news/top-headlines?country=us",
    uk:"http://masai-mock-api.herokuapp.com/news/top-headlines?country=uk",
    nz:"http://masai-mock-api.herokuapp.com/news/top-headlines?country=nz"
}
// console.log(urls[0]);
let results= document.getElementById("results");

newsData(urls.in);

document.querySelector("#in").addEventListener("click", function(){
    newsData(urls.in);
})

document.querySelector("#ch").addEventListener("click", function(){
    newsData(urls.ch);
})

document.querySelector("#us").addEventListener("click", function(){
    newsData(urls.us);
})

document.querySelector("#uk").addEventListener("click", function(){
    newsData(urls.uk);
})

document.querySelector("#nz").addEventListener("click", function(){
    newsData(urls.nz);
})
// url = urls.in;
// console.log(india)
function newsData(url){
    var u = url;
    fetch(u)
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        data = res.articles;
        appendData(data);
    })
    .catch(function (err){
        console.log("err", err);
    });

    function appendData(d){
        // console.log(d);
        d.map(function (el){
            console.log(el);
            let div = document.createElement("div");
            div.style.display="flex";
            div.style.height = "200px";
            div.style.margin ="20px"
            div.style.border ="1px solid blue"

            let imgDiv = document.createElement("div");
            let contentDiv = document.createElement("div");

            let image = document.createElement("img");
            image.src = el.urlToImage;
            image.style.width = "300px";
            image.style.height = "200px"
            image.style.marginRight = "20px"

            let headline = document.createElement("h3");
            headline.innerText = el.title;

            let description = document.createElement("p");
            description.innerText = el.description;

            imgDiv.append(image);
            contentDiv.append(headline, description);
            div.append(imgDiv, contentDiv);

            results.append(div);
        })
    }
}
