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
    {name:"Java", fileName:"assets/java.svg", description:"Monaco backend", url: "https://github.com/stephengeorge568/OT-server"},
    {name:"Spring", fileName:"assets/spring.svg", description:"Monaco backend", url: "https://github.com/stephengeorge568/OT-server"},
    {name:"Typescript", fileName:"assets/typescript.svg", description:"Monaco frontend", url: "https://github.com/stephengeorge568/OT-editor"},
    {name:"Angular", fileName:"assets/angular.png", description:"Monaco frontend", url: "https://github.com/stephengeorge568/OT-editor"},
    {name:"Linux", fileName:"assets/linux.png", description:"All", url: "https://github.com/stephengeorge568"},
    {name:"Nginx", fileName:"assets/nginx.png", description:"Monaco webserver", url: "https://github.com/stephengeorge568/OT-configs"},
    {name:"Docker", fileName:"assets/docker.png", description:"All", url: "https://github.com/stephengeorge568"},
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
