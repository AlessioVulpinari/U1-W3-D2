/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (sentence) {
  let title = document.querySelector("body div h1")
  console.dir(title)
  title.innerText = sentence
}

changeTitle("Ho cambiato il titolo!")

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (className = "") {
  let title = document.querySelector("body div h1")
  title.classList.add(className)
}

addClassToTitle("myHeading")

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (sentence = "") {
  let paragraphs = document.querySelectorAll("body div p")
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = sentence
  }
}

changePcontent("Testo dei paragrafi cambiato!")

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  let links = document.querySelectorAll("body a")

  for (let i = 0; i < links.length; i++) {
    if (links[i].closest("footer") === null) {
      links[i].href = "https://www.google.com"
      links[i].target = "blank"
    }
  }
}

changeUrls()

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  let secondList = document.getElementById("secondList")
  const newLi = document.createElement("li")
  newLi.innerText = "New Element"
  secondList.appendChild(newLi)
}

addToTheSecond()

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  let firstDiv = document.querySelector("body div:first-of-type")
  const newP = document.createElement("p")
  newP.innerText = "Added paragraph"
  firstDiv.appendChild(newP)
}

addParagraph()

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  let firstUl = document.querySelector("ul:first-of-type")
  firstUl.hidden = true
}

// hideFirstUl()

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  let allUl = document.querySelectorAll("ul")
  Array.from(allUl).forEach((li) => (li.style = "background-color: palegreen;"))
}

paintItGreen()

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  let title = document.querySelector("body div h1")
  title.onclick = () => {
    let tempArray = title.textContent.split("")
    tempArray.pop()
    console.log(tempArray.join(""))
    title.textContent = tempArray.join("")
  }
}

makeItClickable()

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  let footer = document.querySelector("footer")
  console.dir(footer)
  footer.onclick = () => {
    let anchor = document.querySelector("footer a")
    let link = anchor.href
    alert(link)
  }
}

revealFooterLink()

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  let tArea = document.getElementById("tableArea")

  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table")
  const tblBody = document.createElement("tbody")

  // creating all cells
  for (let i = 0; i < 5; i++) {
    // creates a table row
    const row = document.createElement("tr")

    for (let j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      if (i === 0) {
        const cell = document.createElement("th")
        let cellText
        switch (j) {
          case 0:
            cellText = document.createTextNode(`Immagine`)
            cell.appendChild(cellText)
            row.appendChild(cell)
            break

          case 1:
            cellText = document.createTextNode(`Nome Prodotto`)
            cell.appendChild(cellText)
            row.appendChild(cell)
            break

          case 2:
            cellText = document.createTextNode(`Quantità`)
            cell.appendChild(cellText)
            row.appendChild(cell)
            break

          case 3:
            cellText = document.createTextNode(`Prezzo`)
            cell.appendChild(cellText)
            row.appendChild(cell)
            break

          default:
            console.log("error")
        }
      } else {
        const cell = document.createElement("td")
        const cellText = document.createTextNode(
          `cell in row ${i}, column ${j}`
        )
        cell.appendChild(cellText)
        row.appendChild(cell)
      }
    }

    // add the row to the end of the table body
    tblBody.appendChild(row)
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody)

  tArea.appendChild(tbl)
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2")
}

generateTable()

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {}

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  const changeColor = document.getElementById("changeMyColor")

  changeColor.onclick = () => {
    let arrayOfNumber = []

    for (let i = 0; i < 3; i++) {
      let randomNumber = Math.floor(Math.random() * 256)
      arrayOfNumber.push(randomNumber)
    }

    console.log(arrayOfNumber)

    changeColor.style = `color: rgb(${arrayOfNumber[0]} ${arrayOfNumber[1]} ${arrayOfNumber[2]})`

    console.log(changeColor.style)
  }
}
changeColorWithRandom()
