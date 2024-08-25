const name_tag = document.querySelector(".name"); // lấy thẻ name

let nameurl = getnameurl(); // hàm xử lý name 
const getname = localStorage.getItem('recipient');

const result = recipients[getname]; // get infor

if(result){
    name_tag.innerHTML = result.name;
}