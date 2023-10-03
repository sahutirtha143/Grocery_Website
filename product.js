const search1 = () =>{
    const searchBox=document.getElementById("search-item").value.toUpperCase();
    const productRow=document.getElementById("product-row");
    const productColumn=document.querySelectorAll(".product-column");
    const pname=productRow.getElementsByTagName("h3");

    for(var i=0;i<pname.length;i++){
        let match=productColumn[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue=match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1)
            {
                productColumn[i].style.display = "";
            }
            else{
                productColumn[i].style.display = "none";
            }
        }
    }
}
