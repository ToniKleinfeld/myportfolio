import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IconsComponent } from "../../shared/components/header/nav/iconssection/icons/icons.component";

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, IconsComponent],
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss','./contactme.form.component.scss','./contactme.mobile.component.scss']
})
export class ContactmeComponent {

  http = inject(HttpClient);

  formData= {
    name : "",
    email : "",
    message : "",
    terms : false
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response:any) => {

            ngForm.resetForm();
          },
          error: (error:any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}
