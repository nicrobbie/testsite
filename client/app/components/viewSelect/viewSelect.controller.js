export default class viewSelectController {
  static get UID(){
    return "viewSelectController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a viewSelect component"
  }

  /*gridClick(){
    document.getElementById('view').innerHTML=`<div id="gridView"><grid-view></grid-view></div>`;    
  }
  listClick(){
    document.getElementById('view').innerHTML=`<div id="listView"><list-view></list-view></div>`;    
  }*/
  
  gridClick(){
    document.getElementById('gridView').style.display="block";    
  	document.getElementById('listView').style.display="none";  	
  }
  listClick(){
    document.getElementById('listView').style.display="block";
    document.getElementById('gridView').style.display="none";
  }
}
