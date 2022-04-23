import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceCompany } from '../insurance-company';
import { InsuranceCompanyService } from '../insurance-company.service';

@Component({
  selector: 'app-delete-insurance-company',
  templateUrl: './delete-insurance-company.component.html',
  styleUrls: ['./delete-insurance-company.component.css']
})
export class DeleteInsuranceCompanyComponent implements OnInit {

  insuranceCompanyId!: number;
  insuranceCompany!: InsuranceCompany;
  insuranceCompanies!: InsuranceCompany[];


  constructor(private insuranceCompanyService: InsuranceCompanyService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getInsuranceCompany();
  }

  public getInsuranceCompany(){
    this.insuranceCompanyId = this.activateRoute.snapshot.params['id'];
    this.insuranceCompanyService.getInsuranceCompanyById(this.insuranceCompanyId)
    .subscribe(data => {
      console.log(data)
      this.insuranceCompany = data;
    }, error => console.log(error));
  }


  public onDeleteInsuranceCompany(insuranceCompany: InsuranceCompany){
    this.insuranceCompanyService.deleteInsuranceCompany(insuranceCompany).subscribe( data => {
      console.log(data);
      this.goInsuranceCompanyList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
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


  goInsuranceCompanyList(){
    this.router.navigate(['/insurance-companies/insurance-companies'])
  }


}
