function getnameurl(){
    const pathname = window.location.href;
    const urlObj = new URL(pathname);

    // Sử dụng URLSearchParams để lấy giá trị của tham số name
    const params = new URLSearchParams(urlObj.search);
    const name = params.get('name');
    localStorage.setItem('recipient', name);
}


const recipients = {
    "nhan": {
        "name" : "Thanh Nhàn",
        "link" : "https://s120-ava-talk.zadn.vn/7/1/a/f/31/120/4ab5e76edb19eafb872881229af125ae.jpg",
    },
    "y": {
        "name" : "Như Ý",
        "link" : "https://s120-ava-talk.zadn.vn/f/4/0/8/275/120/b1a293dc7ac9e0b23d828a098fb2c52e.jpg",

    },
    "nguyet46" : {
        "name": "Bé Nguyệt",
        "link" : "https://s120-ava-talk.zadn.vn/e/7/2/0/36/120/ce545917dae8164452bca40a2221692b.jpg",
    },
    "yen": {
        "name": "Phi Yến",
        "link": "https://s120-ava-talk.zadn.vn/1/b/4/2/129/120/9a43788ef94c9b148fe885342f6d2436.jpg",
    },
    "ngan47": {
        "name": "Thanh Ngân",
        "link": "https://s75-ava-talk.zadn.vn/6/9/a/1/16/75/69921cea0d242924751d0731240584a5.jpg",
    },
    "hoa": {
        "name": "Bé Bông",
        "link": "https://s75-ava-talk.zadn.vn/0/f/f/b/20/75/d5c47604e9ada196b29d9cf84d4b6605.jpg",
    },
    "vinh48": {
        "name": "Thành Vinh",
        "link": "https://s120-ava-talk.zadn.vn/c/1/f/0/16/120/a7f68f4a87db161e77a4efcafe8637f0.jpg",
    },
    "thinh": {
        "name": "Bé Thịnh",
        "link": "https://s120-ava-talk.zadn.vn/6/a/f/a/34/120/9f33298464142291177df01c50bd0418.jpg",
    },
    "son": {
        "name": "Nguyễn Thái Sơn",
        "link": "https://s75-ava-talk.zadn.vn/b/5/0/f/212/75/fb1ff53a4004517f27a0e5125bd9b7a3.jpg",
    },
    "van": {
        "name": "Bé Vân",
        "link": "https://s75-ava-talk.zadn.vn/a/2/d/0/54/75/7e445175a3a9b056d2630561635e760c.jpg",
    },
    "chau49": {
        "name": "Bảo Châu",
        "link": "https://s120-ava-talk.zadn.vn/4/6/7/4/33/120/e407689259c0e85be8cf617c58c847e7.jpg",
    },
    "duy": {
        "name": "Bảo Duy",
        "link": "https://s120-ava-talk.zadn.vn/2/9/1/3/31/120/ba3773a022ca7e66a9386df62989339e.jpg",
    },
    "san": {
        "name": "Bé Sản",
        "link": "https://s120-ava-talk.zadn.vn/7/8/c/e/10/120/a7370bab47eefcdebe24d9a4b144dd5e.jpg"
    },
    "cat": {
        "name" : "Hòa Cát",
        "link": "https://s120-ava-talk.zadn.vn/9/a/6/c/33/120/59099f06d5c44eda48964dade29f27ca.jpg",
    },
    "lam" : {
        "name" : "Ngọc Lâm",
        "link" : "https://s120-ava-talk.zadn.vn/5/1/7/0/11/120/03c22e7c422c345f386388cc14af8147.jpg",
    },
    "khang49": {
        "name" : "Bé Khang",
        "link": "https://s120-ava-talk.zadn.vn/9/e/3/e/21/120/a789849f2c9edcc5cca63ba7ca67c23d.jpg"
    },
    "chau48": {
        "name" :  "Quỳnh Châu",
        "link" : "https://s120-ava-talk.zadn.vn/d/b/e/9/64/120/6b83b850313bf2ca6d3b8f79392d9c14.jpg"
    },
    "sang": {
        "name" : "Bé Sang",
        "link" : "https://s120-ava-talk.zadn.vn/c/9/b/7/62/120/4feeb5a7c22864598492bfa8e78b2e7e.jpg"
    },
    "toan48": {
        "name": "Bé Toàn",
        "link" : "https://s120-ava-talk.zadn.vn/5/2/a/2/45/120/125a2e5c9e4cb1d0298dd11497ad1e87.jpg"
    },
    "vinh46": {
        "name": "Bạn Vinh",
        "link" : "https://s120-ava-talk.zadn.vn/f/9/5/2/13/120/374456a624dcdb5981244bd2a7d8bc16.jpg"
    },
    "tran46": {
        "name": "Bạn Ngọc Trân",
        "link": "https://s120-ava-talk.zadn.vn/3/d/3/6/76/120/224fbd7651a514c9020380271a70bc4a.jpg"
    },
    "tuyen46": {
        "name" : "Bạn Tuyền",
        "link" : "https://s120-ava-talk.zadn.vn/3/1/1/c/223/120/106f6a617671f08a0927f4d189925c7d.jpg"
    },
    "huong46": {
        "name": "Bạn Hương",
        "link" : "https://s120-ava-talk.zadn.vn/f/2/d/5/27/120/59a1621024d1c12691f6f658312ec27e.jpg"
    },
    "thai46": {
        "name": "Bạn Thái",
        "link": "https://s120-ava-talk.zadn.vn/2/2/c/1/34/120/b1529c1404c62227515b0e1545cee14b.jpg"
    },
    "loc46": {
        "name": "Bạn Lộc",
        "link" : "https://s120-ava-talk.zadn.vn/e/3/3/a/19/120/76fea4fee0a11f639e3c9ebd3c2cdcee.jpg"
    }

    
};