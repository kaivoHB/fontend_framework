let searchUrl = window.location.search.split('=');
let searchReult = searchUrl[1].replace(new RegExp("\\+","g"),' ');
// console.log(searchUrl[1].replace(new RegExp("\\+","g"),' '));

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {

            // Search
            let card_search = $(`<form action="../html/news_detail.html" method="get">
                                    <div class="card mb-5" style="width: 100%;">
                                        <input type="text" id="id${i}" name="id" style="display:none" value="${data[i].id}"/>
                                        <img class="card-img-top" title="${data[i].title}" src="${data[i].image}">
                                        <div class="card-body">
                                            <h4 class="card-title" title="${data[i].title}">${data[i].title}</h4>
                                            <p class="card-text">${data[i].description}</p>
                                        </div>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                                    </div>
                                </form>`);

            if(data[i].title == searchReult || data[i].cate == searchReult){
                $('#search_main').append(card_search);
            }
        }
    })