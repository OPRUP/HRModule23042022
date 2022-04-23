import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  public sections: Section[] = [];

  constructor(private sectionService: SectionService, private router: Router){}


  ngOnInit(): void {
    this.getAllSections();
  }

  public editDepartmentById(id: number): void {
    this.router.navigate(['/top-managements/edit-top-management',id])
  }

  public getAllSections(): void {
    this.sectionService.getSections().subscribe(
      (response: Section[]) => {
        this.sections = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSection(sectionId: number){
    this.sectionService.deleteSection(sectionId).subscribe( data => {
      console.log(data);
      this.getAllSections();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
  }

}
