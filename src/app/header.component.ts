import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginmodalcss = "makeithidden";

  constructor() { }

  ngOnInit() {
  }

  onChangeLoginModalCss(logincss: string) {
  	this.loginmodalcss = logincss;
  }

}
