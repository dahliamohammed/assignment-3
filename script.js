var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");
var deleteBtns;
var visitBtns;

var bookmarkslist=[];
function addsite(){
       var site ={
        name:siteName.value,
        URL:siteURL.value,
       }

       if(document.getElementById('submitBtn').innerHTML==='Add site'){
        bookmarkslist.push(site)
    // }else{
    //     productlist.splice( currentindex,1,product);
    //     document.getElementById('submitBtn').innerHTML==='Add site'
    }
    console.log(site)
    bookmarkslist.push(site)
    localStorage.setItem('site',JSON.stringify(bookmarkslist));
    displaysite();
    console.log(bookmarkslist)
    clearInput() ;
    }
    if (localStorage.getItem('site')!==null){
        bookmarkslist = JSON.parse(localStorage.getItem('site'));
        displaysite();

    }else{
        bookmarkslist=[];
    }
    



    function displaysite(){
        var box=""
        for(i=0;i<bookmarkslist.length;i++){
            box+=`
            <tr>
            <td>${i+ 1}</td>
            <td>${bookmarkslist[i].name}</td>
            <td>
            <button onclick="visitsite(${i})" class="btn btn-visit " data-index="${i}">
            <i class="fa-solid fa-eye pe-2 "></i>Visit
          </button>
          </td>
          <td>
          <button onclick="daletsite(${i})" class="btn btn-delete pe-2" data-index="${i}">
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </button>
        </td>
          </tr>        
            `
        }
        document.getElementById("tableContent").innerHTML=box
    }


    function daletsite(i){
        console.log(i)
        bookmarkslist.splice(i,1)
        displaysite()
        localStorage.setItem('site',JSON.stringify(bookmarkslist))
    }
    function visitsite(i){
   console.log(i)
      open(`${bookmarkslist[i].URL}`);
    }

    function clearInput() {
        siteName.value = "";
        siteURL.value = "";
      }
  
  



    