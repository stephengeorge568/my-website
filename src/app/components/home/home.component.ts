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

  public skills: Skill[] = [
    {name:"Java", fileName:"assets/java.svg", description:""},
    {name:"Spring", fileName:"assets/spring.svg", description:""},
    {name:"Typescript", fileName:"assets/typescript.svg", description:""},
    {name:"Angular", fileName:"assets/angular.png", description:""},
    {name:"Linux", fileName:"assets/linux.png", description:""},
    {name:"Nginx", fileName:"assets/nginx.png", description:""},
    {name:"Docker", fileName:"assets/docker.png", description:""},
  ];

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
