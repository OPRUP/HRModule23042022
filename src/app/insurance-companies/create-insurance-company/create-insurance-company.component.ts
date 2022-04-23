import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-create-insurance-company',
  templateUrl: './create-insurance-company.component.html',
  styleUrls: ['./create-insurance-company.component.scss']
})
export class CreateInsuranceCompanyComponent implements OnInit {

   // public majors: Major[] = [];
   insuranceCompanies!: InsuranceCompany[];

   constructor(private insuranceCompanyService: InsuranceCompanyService, private router: Router){}

   ngOnInit() {
   }

   goInsuranceCompanyList(){
     this.router.navigate(['/insurance-companies/insurance-companies'])
   }

   public onAddInsuranceCompany(addForm: NgForm): void {
     document.getElementById('add-insurance-company-form')?.click();
     this.insuranceCompanyService.addInsuranceCompany(addForm.value).subscribe(
       (response: InsuranceCompany) => {
         console.log(response);
         this.insuranceCompanyService.getInsuranceCompanies();
         this.goInsuranceCompanyList();

       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }

}
