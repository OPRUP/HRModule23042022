import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  public department: Section[] = [];
  id!: number;
  section!: Section;
  sections!: Section[];

  constructor(private sectionService: SectionService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getSection();
  }

  goSectionsList(){
    this.router.navigate(['/sections/sections'])
  }

  public getSection(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.sectionService.getSectionById(this.id)
    .subscribe(data => {
      console.log(data)
      this.section = data;
    }, error => console.log(error));
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

  public onUpdateSection(section: Section): void {
    this.sectionService.updateSection(section).subscribe(
      (response: Section) => {
        console.log(response);
        this.getAllSections();
        this.goSectionsList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
