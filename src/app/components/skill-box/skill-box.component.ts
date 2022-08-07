import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/objects/Skill';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.css']
})
export class SkillBoxComponent implements OnInit {

  @Input() skill!: Skill;

  constructor() { 
    // console.log(this.skill.name);
  }

  ngOnInit(): void {
  }

}
