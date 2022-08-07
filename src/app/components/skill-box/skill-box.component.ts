import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/objects/Skill';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss']
})
export class SkillBoxComponent implements OnInit {

  @Input() skill!: Skill;

  constructor() { 
    // console.log(this.skill.name);
  }

  goToLink(): void {
    window.open(this.skill.url);
  }

  ngOnInit(): void {
  }

}
