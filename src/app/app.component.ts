import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-analyzer';

  constructor () {}

  // getAddress() {
  //   chrome.tabs.getCurrent(function(tab){
  //     var address = tab?.title;
  //     console.log(tab);
  //     console.log("going to print address");
  //     console.log(address);
  //   });
  //}
}
