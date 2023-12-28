let OriginalGangster = function(){
return {
    theme: "",
    interpretations: ["","","",""],
    repertoire: "",
    thesis: "",
    arguments: ["",""],
    interventions:[["","","","",""],["","","","",""]],
    }
}
let vue = new Vue({
el:"#vue",
data:{
page:0,
changepage:function(x,s){
if(s) save()
this._data.page = x
load(x)
},
texts: OriginalGangster(),
}})

function save(){
localStorage.setItem(vue._data.page,JSON.stringify(vue._data.texts))
}

function load(page = vue._data.page){
val = localStorage.getItem(page)
if(val==null) vue._data.texts = OriginalGangster()
else vue._data.texts = JSON.parse(val)
}

setInterval(save,2500)