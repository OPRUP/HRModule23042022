import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.scss']
})
export class EditBankComponent implements OnInit {

  //public qualification: Qualification[] = [];
  bankId!: number;
  bank!: Bank;
  banks!: Bank[];

  constructor(private bankService: BankService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getBank();
  }

  goBankList(){
    this.router.navigate(['/banks/banks'])
  }

  public getBank(){
    this.bankId = this.activateRoute.snapshot.params['id'];
    this.bankService.getBankById(this.bankId)
    .subscribe(data => {
      console.log(data)
      this.bank = data;
    }, error => console.log(error));
  }

  public getAllBanks(): void {
    this.bankService.getBanks().subscribe(
      (response: Bank[]) => {
        this.banks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateBank(bank: Bank): void {
    // document.getElementById('update-bank-form')?.click();
    this.bankService.updateBank(bank).subscribe(
      (response: Bank) => {
        console.log(response);
        this.getAllBanks();
        this.goBankList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
