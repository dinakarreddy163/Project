import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { OrderService } from '../order.service';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.scss']
})
export class OrderSubmitComponent implements OnInit {
  getProducts: any;
  orderNum: any;
  totalAmount:number=0;
  showPrint:any=false;
  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.getCartDetails()
    this.genOrderNum();
  }
  genOrderNum() {
    this.orderNum = '';
    let str = '0123456789';
    for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
        * str.length + 1);
      this.orderNum += str.charAt(char)
    }
  }
  getCartDetails() { 
    this.app.getAddToCart().subscribe((data) => {
      this.getProducts = data;
      this.totalAmount=0;
      this.getProducts.forEach((data:any)=>{
       this.totalAmount=this.totalAmount+(data.qty*data.price);
      })
    })
  }
  submitOrder()
  {
    this.showPrint=true;
  }
  printOrder()
  {
    const docDefinition = {
      content: [{
          table: {
              headerRows: 1,
              widths: ['*', 'auto', 100, '*'],
              body: [
                  ['First', 'Second', 'Third', 'Последняя'],
                  ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                  [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Чё']
              ]
          }
      }]
  };
  pdfMake.createPdf(docDefinition).download('pdfmake.pdf')
  }
}
