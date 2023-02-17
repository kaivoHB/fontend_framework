const endpoint = 'https://63df1c4359bccf35daaebf20.mockapi.io/news';
let currentUrl = window.location.search.slice(4, 6);

// console.log(currentUrl);

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {

            // Intro
            let card = $(`<form action="../html/news_detail.html" method="get">
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

            if(data[i].cate == 'Society'){
                $('#society_main_intro').append(card);
            }else if(data[i].cate == 'Politics laws'){
                $('#politics_law_main_intro').append(card);
            }else if(data[i].cate == 'Economy'){
                $('#economy_main_intro').append(card);
            }else if(data[i].cate == 'Life style'){
                $('#life_style_main_intro').append(card);
            }else if(data[i].cate == 'Sports'){
                $('#sports_main_intro').append(card);
            }else if(data[i].cate == 'Environment'){
                $('#environment_main_intro').append(card);
            }

            // Detail
            let card_detail = $(`<div class="card mb-5 w-100" style="width: 100%;">
                                    <div class="card-body">
                                        <span class="font-weight-light pb-3 mb-5 text-secondary">${data[i].date_create}</span>
                                        <span class="font-weight-light float-right font-italic text-secondary">${data[i].author}</span>
                                        <h4 class="card-title mt-3" title="${data[i].title}">${data[i].title}</h4>
                                        <p class="card-text">${data[i].description}</p>
                                    </div>
                                    <img class="card-img-top" title="${data[i].title}" src="${data[i].image}">
                                    <div class="card-body">
                                        <p class="card-text">${data[i].content}</p>
                                    </div>
                                </div>
                                
                                <h4><span style="color: rgb(47, 45, 43)">C</span><span style="color: rgb(121, 121, 133)">OMMENTS</span></h4><br>

                                <div class="row">
                                    <div class="col-6">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control" placeholder="Username">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <textarea class="form-control" name="comment" id="comment" cols="30" rows="5" placeholder="Comment"></textarea>
                                        <input type="button" id="submit_comment" class="btn btn-primary float-right mt-2 w-25" value="SEND">
                                    </div>
                                </div>`);
                
            if(data[i].id == currentUrl){
                $('#detail_main').append(card_detail);
            }

            // Sidebar
            let card_sidebar = $(`<form action="../html/news_detail.html" method="get">
                            <div class="card mb-5" style="width: 100%">
                                <input type="text" id="id${i}" name="id" style="display:none" value="${data[i].id}"/>
                                <img class="card-img-top" title="${data[i].title}" src="${data[i].image}">
                                <div class="card-body">
                                    <p class="card-title" title="${data[i].title}">${data[i].title}</p>
                                </div>
                                <input class="btn btn-link" type="submit" value="Read more"/>
                            </div>
                        </form><hr>`);
                
                $('#sidebar').append(card_sidebar);
        }

        // submit comments
        $('#submit_comment').click(function(){
            alert('Success');
        });


        // Index-slide
        let slide = $(`<div class="carousel-item active">
                        <img class="slide d-block w-100" src="${data[1].image}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="slide d-block w-100" src="${data[5].image}" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="slide d-block w-100" src="${data[9].image}" alt="Third slide">
                    </div>`);

        $('#carousel').append(slide);


        // Index
        let card_society = $(`<form action="../html/news_detail.html" method="get">
                                <div class="row mb-3">
                                    <input type="text" id="id${0}" name="id" style="display:none" value="${data[0].id}"/>
                                    <div class="col-5">
                                        <img class="title_img" src="${data[0].image}" alt="image">
                                    </div>
                                    <div class="col-7">
                                        <h5>${data[0].title}</h5>
                                        <p>${data[0].description}</p>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                                    </div>
                                </div>
                                </form>
                                <form action="../html/news_detail.html" method="get">
                                <div class="row mb-3">
                                    <input type="text" id="id${3}" name="id" style="display:none" value="${data[3].id}"/>
                                    <div class="col-5">
                                        <img class="title_img" src="${data[3].image}" alt="image">
                                    </div>
                                    <div class="col-7">
                                        <h5>${data[3].title}</h5>
                                        <p>${data[3].description}</p>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                                    </div>
                                </div></form><hr>`);
        $('#society_index_main').append(card_society);


        let card_politics_laws = $(`<div class="row mb-3">
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${4}" name="id" style="display:none" value="${data[4].id}"/>
                                        <img class="title_img" src="${data[4].image}" alt="image">
                                        <h5>${data[4].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                    
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${5}" name="id" style="display:none" value="${data[5].id}"/>
                                        <img class="title_img" src="${data[5].image}" alt="image">
                                        <h5>${data[5].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${6}" name="id" style="display:none" value="${data[6].id}"/>
                                        <img class="title_img" src="${data[6].image}" alt="image">
                                        <h5>${data[6].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${7}" name="id" style="display:none" value="${data[7].id}"/>
                                        <img class="title_img" src="${data[7].image}" alt="image">
                                        <h5>${data[7].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                </div><hr>`);
        $('#politics_laws_index_main').append(card_politics_laws);


        let card_economy = $(`<form action="../html/news_detail.html" method="get">
                                <div class="row mb-3">
                                        <div class="col-6 pr-0">
                                            <input type="text" id="id${8}" name="id" style="display:none" value="${data[8].id}"/>
                                            <h5>${data[8].title}</h5>
                                            <p>${data[8].description}</p>
                                            <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                                        </div>
                                        <div class="col-6">
                                            <img class="title_img" src="${data[8].image}" alt="image">
                                        </div>
                                </div></form><hr>`);
        $('#economy_index_main').append(card_economy);
        

        let card_life_style = $(`<form action="../html/news_detail.html" method="get">
        <div class="row mb-3">
            <input type="text" id="id${11}" name="id" style="display:none" value="${data[11].id}"/>
            <div class="col-5">
                <img class="title_img" src="${data[11].image}" alt="image">
            </div>
            <div class="col-7">
                <h5>${data[11].title}</h5>
                <p>${data[11].description}</p>
                <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
            </div>
        </div>
        </form>
        <form action="../html/news_detail.html" method="get">
        <div class="row mb-3">
            <input type="text" id="id${12}" name="id" style="display:none" value="${data[12].id}"/>
            <div class="col-5">
                <img class="title_img" src="${data[12].image}" alt="image">
            </div>
            <div class="col-7">
                <h5>${data[12].title}</h5>
                <p>${data[12].description}</p>
                <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
            </div>
        </div></form><hr>`);
        $('#life_style_index_main').append(card_life_style);


        let card_sports = $(`<div class="row mb-3">
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${15}" name="id" style="display:none" value="${data[15].id}"/>
                                        <img class="title_img" src="${data[15].image}" alt="image">
                                        <h5>${data[15].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                    
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${16}" name="id" style="display:none" value="${data[16].id}"/>
                                        <img class="title_img" src="${data[16].image}" alt="image">
                                        <h5>${data[16].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${17}" name="id" style="display:none" value="${data[17].id}"/>
                                        <img class="title_img" src="${data[17].image}" alt="image">
                                        <h5>${data[17].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                    <div class="col-6">
                                        <form action="../html/news_detail.html" method="get">
                                        <input type="text" id="id${18}" name="id" style="display:none" value="${data[18].id}"/>
                                        <img class="title_img" src="${data[18].image}" alt="image">
                                        <h5>${data[18].title}</h5>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/></form>
                                    </div>
                                </div><hr>`);
        $('#sports_index_main').append(card_sports);


        let card_environment = $(`<form action="../html/news_detail.html" method="get">
        <div class="row mb-3">
                <div class="col-6 pr-0">
                    <input type="text" id="id${19}" name="id" style="display:none" value="${data[19].id}"/>
                    <h5>${data[19].title}</h5>
                    <p>${data[19].description}</p>
                    <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                </div>
                <div class="col-6">
                    <img class="title_img" src="${data[19].image}" alt="image">
                </div>
        </div></form><hr>`);
        $('#environment_index_main').append(card_environment);
    });

    


