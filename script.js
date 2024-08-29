const linkimg = document.querySelector(".linkimg"); // lấy thẻ name

let nameurl = getnameurl(); // hàm xử lý name 
const getname = localStorage.getItem('recipient');

const result = recipients[getname]; // get infor


if(result){
    linkimg.src = result.link
}

const clickme = document.querySelector(".clickme");
const main_content = document.querySelector(".main-content");
const main_content2 = document.querySelector(".main-content2");
const name_invate = document.querySelector(".yourname");
const address = document.querySelector(".address");

console.log(main_content);
console.log(main_content2);


clickme.onclick = () => {
    main_content2.classList.remove("openclick");
    main_content.classList.add("openthu");
    if(result){
        name_invate.innerHTML = result.name
        address.innerHTML = result.name
    }
}