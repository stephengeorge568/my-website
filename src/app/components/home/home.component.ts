import { Component, HostListener, OnInit } from '@angular/core';
import { Skill } from 'src/app/objects/Skill';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public innerWidth: any;

  public showVerticalMenu: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  goToPersonalGithub(): void {
		window.open("https://github.com/stephengeorge568");	
	}

  toggleVerticalMenu(): void {
    this.showVerticalMenu = !this.showVerticalMenu;
  }

}
