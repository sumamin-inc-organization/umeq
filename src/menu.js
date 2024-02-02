import "./common.js"
import "./css/menu.css";

let fixedHeader = document.getElementsByClassName("fixed_header")[0];
let spHeader = document.getElementsByClassName("sp_header")[0];

//各ボタンを押したときに各モーダルを表示する
window.showModalWindow = (modalType) => {
    var modalType = document.getElementById(modalType);
    modalType.style.display = "flex";
    fixedHeader.style.position = "relative";
    spHeader.style.position = "relative";
}

// モーダルウィンドウを閉じる
window.closeModal = (modalType) => {
    var modalType = document.getElementById(modalType);
    modalType.style.display = "none";
    fixedHeader.style.position = "fixed";
    spHeader.style.position = "fixed";
}
