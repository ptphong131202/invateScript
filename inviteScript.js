function getnameurl(){
    const pathname = window.location.href;
    const urlObj = new URL(pathname);

    // Sử dụng URLSearchParams để lấy giá trị của tham số name
    const params = new URLSearchParams(urlObj.search);
    const name = params.get('name');
    localStorage.setItem('recipient', name);
}


const recipients = {
    "phong": {
        "name": "Phạm Thanh Phong"
    },
    "nhan": {
        "name" : "Nguyễn Thanh Nhàn"
    },
    "y": {
        "name" : "Nguyễn Thị Như Ý"
    }
};