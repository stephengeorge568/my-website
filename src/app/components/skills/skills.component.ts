import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/objects/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[] = [
    {name:"Java", fileName:"assets/java.svg", description:"Monaco backend", url: "https://github.com/stephengeorge568/OT-server"},
    {name:"Spring", fileName:"assets/spring.svg", description:"Monaco backend", url: "https://github.com/stephengeorge568/OT-server"},
    {name:"Typescript", fileName:"assets/typescript.svg", description:"Monaco frontend", url: "https://github.com/stephengeorge568/OT-editor"},
    {name:"Angular", fileName:"assets/angular.png", description:"Monaco frontend", url: "https://github.com/stephengeorge568/OT-editor"},
    {name:"Linux", fileName:"assets/linux.png", description:"All", url: "https://github.com/stephengeorge568"},
    {name:"Nginx", fileName:"assets/nginx.png", description:"Monaco webserver", url: "https://github.com/stephengeorge568/OT-configs"},
    {name:"Docker", fileName:"assets/docker.png", description:"All", url: "https://github.com/stephengeorge568"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
