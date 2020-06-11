import { Component, OnInit } from '@angular/core';
// import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
  // template:`<pdf-viewer [src]="pdfSrc" 
  //             [render-text]="true"
  //             style="display: block;"
  // ></pdf-viewer>`
})
export class PdfViewerComponent implements OnInit {

  pdfSrc="";

  constructor() { }

  ngOnInit() {  }

  openpdf(){
    console.log("openpdf");
    this.pdfSrc = "../../assets/pdf/376110013607.pdf";
  }

}
