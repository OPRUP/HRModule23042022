import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrls: ['./delete-bank.component.scss']
})
export class DeleteBankComponent implements OnInit {
  bankId!: number;
  bank!: Bank;
  banks!: Bank[];


  constructor(private bankService: BankService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.getBank();
  }

  public getBank(){
    this.bankId = this.activateRoute.snapshot.params['id'];
    this.bankService.getBankById(this.bankId)
    .subscribe(data => {
      console.log(data)
      this.bank = data;
    }, error => console.log(error));
  }


  public onDeleteBank(bank: Bank){
    this.bankService.deleteBank(bank).subscribe( data => {
      console.log(data);
      this.goBankList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
    }
    );
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


  goBankList(){
    this.router.navigate(['/banks/banks'])
  }


}
