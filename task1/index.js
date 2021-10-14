console.log('hello there')


let pigs = 27
let meat = 0
let chartWarning = document.getElementById("warn")
let count = 2

document.getElementById("pigcount").innerHTML = pigs;
document.getElementById("meatcount").innerHTML = 0;


const slaughter=(name)=> {
    if (pigs > 0) {
        pigs--;
        meat += 15;
        
    }
    console.log(name)
    if (name === 'hello') {
        console.log('bu domuz')
    }
    return check()
  }

const check=()=> {
    document.getElementById("pigcount").innerHTML = pigs;
    document.getElementById("meatcount").innerHTML = meat;
    if (meat < 50 ) {
        document.getElementById("warning").innerHTML = 'You are starving this month.';
    } else {
        document.getElementById("warning").innerHTML = 'You are well fed. -.-'
    }
}
  
const addToList=()=> {
    let newCellText = document.getElementById("listinput").value;
    let chart = document.getElementById("puppylist");
    if (newCellText != '') {
        let chartNewRow = chart.insertRow(-1)
        let chartNewCell = chartNewRow.insertCell()
        let buttonElement = '<input type="button" value="X" onclick="deleteRow('+count+')"> </input>'
        let chartButtonCell = chartNewRow.insertCell()
        chartButtonCell.innerHTML += buttonElement
        chartNewRow.id = count
        chartNewCell.id = "t" + count
        chartNewCell.setAttribute("onclick", "strikeText('t"+count+"')")
        console.log('newCellText: ', newCellText)
        let newText = document.createTextNode(newCellText);
        chartNewCell.appendChild(newText);
        count++
        chartWarning.setAttribute('class', 'invisible');

    } else {
       chartWarning.removeAttribute('class');
    }
    document.getElementById("listinput").value = ''
}
const deleteRow = (rowId) => {
  const rowId2 = document.getElementById(rowId);
  (document.getElementById("puppylist")).removeChild(rowId2)
}

const strikeText = (textId) => {
  const textId2 = document.getElementById(textId);
  if (textId2.className === "strike") {
    textId2.className = ""
  } else {
    textId2.className = "strike"
  }
}