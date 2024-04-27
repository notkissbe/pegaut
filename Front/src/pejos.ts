document.addEventListener("DOMContentLoaded", async()=>{
    let eredmeny=await fetch('http://localhost:3000/peugeotmodels');
    let kiir=await eredmeny.json();

    kiir.foreach((element: {Model:string, Type:string, Year: number, Price:number, EngineType:string, RangeDistance:string})=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        let tablazat=document.getElementById("tablazat") as HTMLElement;
        tablazat.appendChild(tr);
    })
})