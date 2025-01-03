import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [TranslateModule,FormsModule,CommonModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {

  formData= {
    name : "",
    email : "",
    message : "",
  
  }

  onSubmit(ngForm : NgForm){
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.formData)
    }    
  }



}
