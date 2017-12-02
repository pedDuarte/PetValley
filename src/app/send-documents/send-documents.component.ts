import { Response } from '@angular/http/src/static_response';
import { SendDocumentService } from './../services/sendDocument.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { debug } from 'util';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'pet-send-documents',
  templateUrl: './send-documents.component.html',
  styleUrls: ['./send-documents.component.css']
})
export class SendDocumentsComponent implements OnInit {

  public documentForm: FormGroup;
  public image: any;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private sendDocumentService: SendDocumentService) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.documentForm = this.formBuilder.group({
        rg: this.formBuilder.control('', [Validators.required]),
        /*cpf: this.formBuilder.control('', [Validators.required]),*/
        comprovanteEndereco: this.formBuilder.control('', [Validators.required])
      });
    }

  }

  sendDocuments() {
    $("#modalCarregamento").modal("show");
    this.sendDocumentService.saveDocuments(this.documentForm)
    $("#modalCarregamento").modal("hide");
    $("#modalAlerta").modal("show");
  }

  changeImageRG($event) {
    this.readThisRG($event);
  }

  readThisRG(event: any): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result.split(',')[1];
        this.documentForm.patchValue({
          rg: {
            type_document: "RG",
            image_document: this.image,
            id_user_fk: this.loginService.getUserLogged().id
          }
        })
        $("#rg").attr("src", reader.result);
      };
    }
  }

  /*changeImageCPF($event) {
    this.readThisCPF($event);
  }

  readThisCPF(event: any): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result.split(',')[1];
        this.documentForm.patchValue({
          cpf: {
            type_document: "CPF",
            image_document: this.image,
            id_user_fk: this.loginService.getUserLogged().id
          }
        })
        $("#cpf").attr("src", reader.result);
      };
    }
  }*/

  changeImageComprovanteEndereco($event) {
    this.readThisComprovanteEndereco($event);
  }

  readThisComprovanteEndereco(event: any): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result.split(',')[1];
        this.documentForm.patchValue({
          comprovanteEndereco: {
            type_document: "CE",
            image_document: this.image,
            id_user_fk: this.loginService.getUserLogged().id
          }
        })
        $("#comprovanteEndereco").attr("src", reader.result);
      };
    }
  }
}
