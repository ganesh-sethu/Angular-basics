import { Component } from '@angular/core';
import array_words from '../utils/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words='';
  limit=10;
  handleslider(new_limit:number){
    this.limit=new_limit;
  }

  generate(){
    this.words= array_words.slice(0,this.limit).join(" ");
  }

}
