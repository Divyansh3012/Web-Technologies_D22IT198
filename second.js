// const { NULL } = require("mysql/lib/protocol/constants/types");

function addItems()
{
    
   
    const inEleObj = document.getElementById("idItem")

    let liObj = document.createElement("li")

    liObj.textContent = inEleObj.value;

    inEleObj.value=null;

    document.getElementById("idEntItems").appendChild(liObj);
    
    inEleObj.focus();

    
}
function sortList() {
    var list, i, sortFlag, LiEle, sorted;
    list = document.querySelector(".idEntItems");
    sortFlag = true;
    while (sortFlag) {
       sortFlag = false;
       LiEle = list.getElementsByTagName("LI");
       for (i = 0; i < LiEle.length - 1; i++) {
          sorted = false;
          if ( LiEle[i].innerHTML.toLowerCase() > LiEle[i + 1].innerHTML.toLowerCase() ) {
             sorted = true;
             break;
          }
       }
       if (sorted) {
          LiEle[i].parentNode.insertBefore(LiEle[i + 1], LiEle[i]);
          sortFlag = true;
       }
    }
 }
