import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.scss']
})
export class CreateBankComponent implements OnInit {

   // public majors: Major[] = [];
   banks!: Bank[];

   constructor(private bankService: BankService, private router: Router){}

   ngOnInit() {
   }

   goBankList(){
     this.router.navigate(['/banks/banks'])
   }

   public onAddBank(addForm: NgForm): void {
     document.getElementById('add-bank-form')?.click();
     this.bankService.addBank(addForm.value).subscribe(
       (response: Bank) => {
         console.log(response);
         this.bankService.getBanks();
         this.goBankList();

       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }

}
