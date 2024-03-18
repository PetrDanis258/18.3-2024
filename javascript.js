const record = document.getElementById("record");
const addBTN = document.getElementById("addBTN");
const delBTN = document.getElementById("delBTN");
let hodnota = 1;

function přidatElement()
{
const myElement = document.createElement("input");
myElement.type = "text";
const myBr = document.createElement(`br`);

myElement.id = `elem${hodnota}`;
myBr.id = `br${hodnota}`;

record.appendChild(myElement);
record.appendChild(myBr);
hodnota++;
}

function odebratRecord(event) 
{
    var selectedRecord = event.target;
    selectedRecord.parentNode.removeChild(selectedRecord);
}

function odebratElement()
{
    if(hodnota === 1){
        alert("heeeeeeej")
    }
    else{
    let jmeno = `elem${hodnota-1}`
    const remElement = document.getElementById(jmeno);
   
    let jmeno2 = `br${hodnota-1}`
    const remElement2 = document.getElementById(jmeno2);

    record.removeChild(remElement);
    record.removeChild(remElement2);
    hodnota--;
    }  
}


addBTN.onclick = přidatElement;
delBTN.onclick = odebratElement;
record.ondblclick = odebratRecord;
