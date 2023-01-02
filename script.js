    import {data } from './data.js'



    let currentPage=1;
    let totalPage=10;

    function num(){
        return Math.ceil(data.length/totalPage)
    }

    function prev(){
        if(currentPage>1){
            currentPage--;
            change(currentPage);
        }
    }

    function next(){
        if(currentPage<num()){
            currentPage++;
            change(currentPage);
        }
    }


    function change(page){
        let btnPrev=document.getElementById("prev");
        let btnNext=document.getElementById("next");
        let listingTable=document.getElementById("table-data")
        let pageSpan=document.getElementById('page');
        if(page<1){
            page=1;
        }
        if(page>num()){
            page=num();
        }
        listingTable.innerHTML="";

        for(let i=(page-1)*totalPage;i<(page*totalPage)&&i<data.length;i++){
            listingTable.innerHTML+=`
            <tr>
      <th scope="row">${data[i].id}</th>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>`
        }
        // pageSpan.innerHTML=`${page}/${num()}`;

        btnPrev.style.display=(page===1)?"none":"inline-block";
        btnNext.style.display=(page===num())?"none":"inline-block";

    }

   
      window.onload=()=>{
        document.getElementById("prev").addEventListener("click",(e)=>{
            e.preventDefault();
            prev();
        })
        document.getElementById("next").addEventListener("click",(e)=>{e.preventDefault();next();})
        change(1);
      };

      let bt=document.getElementsByClassName("bt");
      for(let i=0;i<bt.length;i++){
        bt[i].addEventListener("click",(e)=>{
            e.preventDefault();
            change(parseInt(e.target.innerHTML))
        });
      }
      
      
      