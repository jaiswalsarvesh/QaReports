const container=document.getElementById('container-report');
reportsArray=['esvm.html','webserver.html','esvm.html','esvm.html','esvm.html'];
console.log(container);
container.innerHTML='';
for(let i =0;i<reportsArray.length;i++){
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        const link = document.createElement("a");
        link.style=`background-color:${randomHex}`;
        link.classList.add('item')
        link.href=reportsArray[i];
        link.innerText=reportsArray[i].split('.')[0];
        container.appendChild(link);
}