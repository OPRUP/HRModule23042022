import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Section } from '../section';
import { SectionService } from '../section.service';


@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {

  public departments: Section[] = [];

  constructor(private sectionService: SectionService, private router: Router){}

  ngOnInit() {
  }

  goDepartmentsList(){
    this.router.navigate(['/sections/sections'])
  }

  public onAddSection(addForm: NgForm): void {
    document.getElementById('add-section-form')?.click();
    this.sectionService.addSection(addForm.value).subscribe(
      (response: Section) => {
        console.log(response);
        this.sectionService.getSections();
        this.goDepartmentsList();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
