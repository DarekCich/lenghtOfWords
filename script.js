function onInputTextArea(){
  let val = document.getElementById('inputArea').value;
  val = textToTab(val);
  val = tabToTabOfStruct(val);
  val = groupTab(val);
  val = sortGroupOfTab(val);
  addToRank(val);
  
}
function addToRank(tab){
  addToTop3(tab);
  addToOthers(tab);
}
function min(a,b){
  return a < b ? a : b;
}

function addToTop3(tab){
  let rank = document.getElementById('Rank')
  rank.innerHTML='';
  for(i =0; i<min(3, tab.length); i++){
    let row     = document.createElement('li');
    let number  = document.createElement('div');
    let numberNode = document.createTextNode(tab[i].length)
    number.appendChild(numberNode)

    let list   = document.createElement('div');

    let textTmp = '';
    tab[i].tab.forEach(el => {
      textTmp += el + ', '
    });
    textTmp = textTmp.slice(0, -2);
    let text = document.createTextNode(textTmp)
    list.appendChild(text);
    row.appendChild(number)
    row.appendChild(list)
    rank.appendChild(row)
  }
}
function addToOthers(tab){
  let rank = document.getElementById('otherRankList')
  rank.innerHTML='';
  for(i =3; i<tab.length; i++){
    let row     = document.createElement('li');
    let number  = document.createElement('div');
    let numberNode = document.createTextNode(tab[i].length)
    number.appendChild(numberNode)

    let list   = document.createElement('div');

    let textTmp = '';
    tab[i].tab.forEach(el => {
      textTmp += el + ', '
    });
    textTmp = textTmp.slice(0, -2);
    let text = document.createTextNode(textTmp)
    list.appendChild(text);
    row.appendChild(number)
    row.appendChild(list)
    rank.appendChild(row)
  }
}
function sortGroupOfTab( tab ){
  return tab.sort( (a, b)=>{
    return b.length - a.length;
  })
}
function groupTab( tab ){
  let groupTab = [];
  let tmp = 0;
  tab.forEach(element =>{
    groupTab.forEach(el =>{
      if (el.length === element.length){
        el.tab.push(element.word)
        tmp = 1;
      }
    })
    if( tmp === 0){
      groupTab.push(
        {
          length: element.length,
          tab:    [element.word]
        })
    }
    tmp=0;
  })
  return groupTab;
}
function tabToTabOfStruct( tab ){
  let tabOfStruct = [];
  tab.forEach(element => {
    tabOfStruct.push(wordToStruct(element))
  });
  return tabOfStruct;
}
function textToTab( text ){
  let text2 = text.replace(/\n/g, "");
  const tmp = text2.split(' ');
  return tmp.filter(word => { return word !== "" && word !== '\n'});
}
function wordToStruct( word ){
  return {
    length: word.length,
    word:   word
  }
}