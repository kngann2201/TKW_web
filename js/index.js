
window.onload = function () {
//---------- GO TO TOP --------------------------------------------------------------------//
    let goTop =document.getElementById("gotoTop")
    goTop.onclick = function() {
        //cuộn trang đến một phần tử cụ thể mượt hơn
        document.documentElement.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

//---------- RESPONSIVE THANHMENU -----------------------------------------------------------//
    
    const sidebarMenu = document.getElementById('sidebarMenu');
    let btn = document.querySelector("#menuBtn")
    btn.addEventListener('click', function() {
        sidebarMenu.classList.toggle('show');
    });
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        sidebarMenu.classList.remove("show");
    } 

//---------- ẢNH GIỚI THIỆU ---------------------------------------------------------------//
    let listImg = document.querySelector(".listImg")
    let imageGT = document.querySelectorAll(".gallery .image")
    let gallery = document.querySelector(".gallery")
    var current = 0;
    var w = gallery.offsetWidth;
    console.log(w);
    const changeImg = function() {
        if (current == imageGT.length-1) {
            listImg.style.transition = 'transform 0s';
            listImg.style.transform = `translateX(${0}px)`;
            current = 0; 
        }
        else {
            current++;
            listImg.style.transform = `translateX(${-w * current}px)`;
        }
    }
    let clear = setInterval(() => { changeImg()}, 2500);
    let prev = document.querySelector(".btnGT .prev")
    let next = document.querySelector(".btnGT .next")
    console.log(prev, next)
        prev.onclick = function() {
            clearInterval(clear);
            if (current == 0) {
                current = imageGT.length-1; 
                listImg.style.transition = 'transform 0s';
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            else {
                current--;
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            clear = setInterval(() => { changeImg()}, 2500); 
        }
        next.onclick = function() {
            clearInterval(clear);
            changeImg();
            clear = setInterval(() => { changeImg()}, 2500);
        }

//---------- NỘI DUNG ---------------------------------------------------------------//
    let popup = document.getElementById("popup")
    let x = document.querySelector(".closeBtn")
    // let form = document.querySelector('.formDangKi')
    x.onclick = function() {
        popup.classList.add("hide");
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.faqQuestion').forEach((item) => {
        item.addEventListener('click', () => {
            var faqItem = item.parentElement;
            faqItem.classList.toggle('ac');
        });
    });

    $(".tabContent > li:not(:first-child)").hide();
    $(".tab > li:first-child > a").addClass("active");
    $(".tab > li > a").click(function(event) {
        event.preventDefault();
        $(".tab > li > a").removeClass("active");
        $(".menuXettuyen a").removeClass("activeSub");
        $(this).addClass("active");
        let h = $(this).attr("href");
        $(".tabContent > li").hide();
        $(".menuContent > .tabContent").hide();
        $(h).show();
    });
    $(".menuXettuyen a ").click(function() {
        $(".menuXettuyen a ").removeClass("activeSub");
        $(this).addClass("activeSub");
        let hh = $(this).attr("href");
        $(".menuContent > .tabContent").hide();
        $(hh).show();
    });
    $(".mucLuc a").click(function() {
        let tabCon = $(this).attr("href");
        $(".tab > li > a").removeClass("active");
        $(".tab > li > a[href='" + tabCon + "']").addClass("active");
        $(".tabContent > li").hide();
        $(tabCon).show();
        $('html').animate({
            scrollTop: $(tabCon).offset().top - 320
        }, 500);
    });
}
window.addEventListener('scroll', function () {
    let moon = document.getElementById('moon');
    let text = document.getElementById('text');
    let tau = document.getElementById('tau');
    let star = document.getElementById('star');
    let value = window.scrollY;
    moon.style.left = value *0.4 + 'px';
    moon.style.transform = 'scale(' + value * 0.002 + ')';
    text.style.top = -value *0.2 + 'px';
    tau.style.left = value *0.4 + 'px';
    tau.style.transform = 'scale(' + value * 0.002 + ')';
    star.style.top = value * 0.5 + 'px'; 
}); 
