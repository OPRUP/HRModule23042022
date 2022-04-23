import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-edit-insurance-company',
  templateUrl: './edit-insurance-company.component.html',
  styleUrls: ['./edit-insurance-company.component.scss']
})
export class EditInsuranceCompanyComponent implements OnInit {

  //public qualification: Qualification[] = [];
  id!: number;
  insuranceCompany!: InsuranceCompany;
  insuranceCompanies!: InsuranceCompany[];

  constructor(private insuranceCompanyService: InsuranceCompanyService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getInsuranceCompany();
  }

  goInsuranceCompanyList(){
    this.router.navigate(['/insurance-companies/insurance-companies'])
  }

  public getInsuranceCompany(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.insuranceCompanyService.getInsuranceCompanyById(this.id)
    .subscribe(data => {
      console.log(data)
      this.insuranceCompany = data;
    }, error => console.log(error));
  }

  public getAllInsuranceCompanies(): void {
    this.insuranceCompanyService.getInsuranceCompanies().subscribe(
      (response: InsuranceCompany[]) => {
        this.insuranceCompanies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateInsuranceCompany(insuranceCompany: InsuranceCompany): void {
    this.insuranceCompanyService.updateInsuranceCompany(insuranceCompany).subscribe(
      (response: InsuranceCompany) => {
        console.log(response);
        this.getAllInsuranceCompanies();
        this.goInsuranceCompanyList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
