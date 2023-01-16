let ids = [
    {
        type: "api",
        id: "RUbKMmLOkRc",
        img: 'http://i.ytimg.com/vi/RUbKMmLOkRc/maxresdefault.jpg',
        name: "Scattle - Visitors"
    },
    {
        type: "api",
        id: "iPtPo8Sa3NE",
        img: 'http://i.ytimg.com/vi/iPtPo8Sa3NE/maxresdefault.jpg',
        name: "Death Grips - Exmilitary"
    },
    { 
        type: "api",
        id: "aCb05E3CESA",
        img: 'http://i.ytimg.com/vi/aCb05E3CESA/maxresdefault.jpg',
        name: "MASKED - Unholy"
    },
    {
        type: "api",
        id: "q_SVMNVibSE",
        img: 'https://i.ytimg.com/vi/q_SVMNVibSE/maxresdefault.jpg',
        name: "MASKED - Vivamus"
    },
    {
        type: "link",
        link: "https://www.youtube.com/watch?v=DY1s9SmrQRE",
        img: 'https://f4.bcbits.com/img/a0111032182_10.jpg',
        name: "Carpenter Brut - Trilogy"
    },
    {
        type: "link",
        link: "https://www.youtube.com/watch?v=0TK9fk0Jj2U",
        img: 'https://www.ghostcultmag.com/wp-content/uploads/Carpenter-Brut-LEATHER-TERROR.jpg',
        name: "Carpenter Brut - Leather Terror"
    },
    {
        type: "api",
        id: "WlUefVY29Yw",
        img: 'http://i.ytimg.com/vi/WlUefVY29Yw/maxresdefault.jpg',
        name: "Scattle - Squatters"
    },
    {
        type: "api",
        id: "0bK7nRtB6y0",
        img: 'http://i.ytimg.com/vi/0bK7nRtB6y0/maxresdefault.jpg',
        name: "Scattle - Timelapse"
    },
    {
        type: "api",
        id: "QqydWIvgn_Q",
        img: 'http://i.ytimg.com/vi/QqydWIvgn_Q/maxresdefault.jpg',
        name: "Scattle - Sketch"
    },
    {
        type: "api",
        id: "RPgmGtCQCzU",
        img: 'http://i.ytimg.com/vi/RPgmGtCQCzU/maxresdefault.jpg',
        name: "ΔXIUS LIИK - RΞBØЯИ"
    },
    {
        type: "api",
        id: "cj8-iuOju7E",
        img: 'http://i.ytimg.com/vi/cj8-iuOju7E/maxresdefault.jpg',
        name: "ΔXIUS LIИK - ΞRΛ"
    },
    {
        type: "api",
        id: "IWZktANV-D8",
        img: 'https://i.scdn.co/image/ab67616d0000b273164ec11a1225d579ed030c42',
        name: "Hollow Knight OST"
    },
    {
        type: "api",
        id: "eu-MFuqymsc",
        img: 'http://i.ytimg.com/vi/eu-MFuqymsc/maxresdefault.jpg',
        name: "Death Grips - NO LOVE DEEP WEB"
    },
    {
        type: "api",
        id: "TIokr8jJPkM",
        img: 'https://f4.bcbits.com/img/a2854475053_65',
        name: "Undertale OST"
    },
    {
        type: "api",
        id: "DUEjbW4OKEU",
        img: 'https://i.scdn.co/image/ab67616d0000b273e65ad5e9fc72cba8ddee14a5',
        name: "Metal Gear Rising Revengeance OST"
    }
]
let id = 0

let p = document.querySelector("#player")
let t = document.querySelector("#thumbnail")

t.style.display = "block"
t.firstElementChild.style.backgroundImage = `url('${ids[id].img}')`
t.lastElementChild.innerHTML = ids[id].name
t.href = ids[id].link

if (ids[id].type == "api") {
    p.src = `https://www.youtube.com/embed/${ids[id].id}?enablejsapi=1&widgetid=1&loop=1&rel=0&modestbranding=1`
}

let left = document.querySelector('.arrow-left')

left.onclick = function () {
    if (id > 0) {
        id--
    }
    else {
        id = ids.length-1
    }
    console.log(id);
    if (ids[id].type == "api") {
        p.src = `https://www.youtube.com/embed/${ids[id].id}?enablejsapi=1&widgetid=1&loop=1&rel=0&modestbranding=1` 
    }
    t.firstElementChild.style.backgroundImage = `url('${ids[id].img}')`
    t.lastElementChild.innerHTML = ids[id].name
    t.href = ids[id].link
    t.style.visibility = "visible"
}

let right = document.querySelector('.arrow-right')

right.onclick = () => {
    if (id < ids.length-1) {
        id++
    }
    else {
        id = 0
    }
    console.log(id);
    if (ids[id].type == "api") {
        p.src = `https://www.youtube.com/embed/${ids[id].id}?enablejsapi=1&widgetid=1&loop=1&rel=0&modestbranding=1`   
    }
    t.firstElementChild.style.backgroundImage = `url('${ids[id].img}')`
    t.lastElementChild.innerHTML = ids[id].name
    t.href = ids[id].link
    t.style.visibility = "visible"
}

t.onclick = () => {
    if (ids[id].type == "api") {
        t.style.visibility = "hidden"
    }
    else {
        window.open(ids[id].link, "_blank");
    }
}
