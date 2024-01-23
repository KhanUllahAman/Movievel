var data = [
    {
        "img":"images/favorite/f1.jpg",
        "name":"Insidious",
        "rating":"15+",
        "hours":"2h 45min",
        "link":"insidious.html"
    },
    {
        "img":"images/favorite/f2.jpg",
        "name":"War",
        "rating":"7+",
        "hours":"2h 12min",
        "link":"war.html"
    },
    {
        "img":"images/favorite/f3.jpg",
        "name":"Five Feet Apart",
        "rating":"18+",
        "hours":"3h",
        "link":"five_feet_apart.html"
    },
    
  {
    "img":"images/favorite/f4.jpg",
    "name":" Chhichore",
    "rating":"18+",
    "hours":"1h 55min",
    "link":"chichoray.html"
},
{
  "img":"images/popular/u1.jpg",
  "name":" Mulan",
  "rating":"15+",
  "hours":"2h 45min",
  "link":"Mulan.html"
},
{
  "img":"images/popular/u2.jpg",
  "name":" Laxmi",
  "rating":"14+",
  "hours":"2h 12min",
  "link":"laxmi.html"
},
{
  "img":"images/popular/u3.jpg",
  "name":" Captain America",
  "rating":"18+",
  "hours":"3h",
  "link":"captan_america.html"
},
{
  "img":"images/popular/u4.jpg",
  "name":"life of pie",
  "rating":"18+",
  "hours":"1h 55min",
  "link":"life_of_pi.html"
},
{
  "img":"images/favorite/f5.jpg",
  "name":" Doctor Stranger",
  "rating":"15+",
  "hours":"2h 45min",
  "link":"doctor_stranger.html"
},
{
  "img":"images/popular/u5.jpg",
  "name":" Mission Mangal",
  "rating":"17+",
  "hours":"2h 12min",
  "link":"mission_mangal.html"
},
{
  "img":"images/tvthrillers/05.jpg",
  "name":" Mision Impossible",
  "rating":"18+",
  "hours":"3h",
  "link":"mission-imposible.html"
},
// {
//   "img":"images/tvthrillers/kingman.webp",
//   "name":"Kings Man",
//   "rating":"17+",
//   "hours":"3h",
//   "link":"kingsman.html"
// },
{
  "img":"images/tvthrillers/07.jpg",
  "name":"Casinroyel",
  "rating":"17+",
  "hours":"3h",
  "link":"casinoroyel.html"
},
{
  "img":"images/slider/slider1.jpg",
  "name":"Avengers",
  "rating":"15+",
  "hours":"3h",
  "link":"avangers.html"
},
{
  "img":"images/cast/fast and ferious.jpg",
  "name":"Fast and Furious",
  "rating":"18+",
  "hours":"2.5h",
  "link":"fast_and_ferious.html"
},
{
  "img":"images/cast/frozen2.jpg",
  "name":"Frozen",
  "rating":"13+",
  "hours":"3h",
  "link":"frozen1.html"
},
{
  "img":"images/cast/Harry-Potter2.jpg",
  "name":"Harry potter",
  "rating":"15+",
  "hours":"2h 20min",
  "link":"harry_potter.html"
},
{
  "img":"images/popular/u6.jpg",
  "name":"Martian",
  "rating":"18+",
  "hours":"1h 20min",
  "link":"martain.html"
},
{
  "img":"images/cast/scam 1992.jpg",
  "name":"scam_1922",
  "rating":"17+",
  "hours":"1h 45min",
  "link":"scam_1992.html"
},
{
  "img":"images/cast/stranger things.jpg",
  "name":"Stranger Things",
  "rating":"16+",
  "hours":"2h 45min",
  "link":"stranger_things.html"
},
{
  "img":"images/cast/The Queen's Gambit.jpg",
  "name":"The Queen Gambit",
  "rating":"18+",
  "hours":"3h",
  "link":"The_Queen's_Gambit.html"
},
{
  "img":"images/tvthrillers/06.jpg",
  "name":"Unhinged",
  "rating":"17+",
  "hours":"2.5h",
  "link":"Unhinged.html"
}
]


for(var i = 0 ; i<data.length; i++){


document.getElementById("json").innerHTML += `


<div class="col-md-3 col-lg-3 col-sm-12">
<div
  class="iq-main-header d-flex align-items-center justify-content-between"
></div>
<div class="">
  <ul class="favorites-list-inline p-0 mb-0">
    <!-- slide item 2 -->
    <li class="slide-item">
      <div class="block-images position-relative">
        <div class="img-box">
          <img
            src="${data[i].img}"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="block-description">
          <h6 class="iq-title">
            ${data[i].name}
          </h6>
          <div class="movie-time d-flex align-items-center my-2">
            <div class="badge badge-secondary p-1 mr-2">${data[i].rating}</div>
            <span class="text-white">${data[i].hours}</span>
          </div>
          <a href="${data[i].link}">
            <div class="hover-buttons">
              <span class="btn btn-hover iq-button">
                <i class="fa fa-play mr-1"></i>
                Play Now
              </span>
            </div>
          </a>
        </div>
        <div class="block-social-info">
          <ul class="list-inline p-0 m-0 music-play-lists">
            <li class="share">
              <span><i class="fa fa-share-alt"></i></span>
              <div class="share-box">
                <div class="d-flex align-items-center">
                  <a href="#" class="share-ico"
                    ><i class="fa fa-share-alt"></i
                  ></a>
                  <a href="#" class="share-ico"
                    ><i class="fa fa-youtube"></i
                  ></a>
                  <a href="#" class="share-ico"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </div>
              </div>
            </li>
            <li>
              <span><i class="fa fa-heart"></i></span>
              <span class="count-box">35+</span>
            </li>
            <li>
              <span><i class="fa fa-plus"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>

`
}
