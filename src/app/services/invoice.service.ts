import { Injectable } from '@angular/core';
import { InvoiceDetailsComponent } from '../components/invoice-details/invoice-details.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }

  getInvoiceDetails(){
    return [
      {"description": "Watch", "quantity": 1, "unitPrice": 3000.00, "totalPrice": 3000.00},
      {"description": "Cellphone", "quantity": 2, "unitPrice": 24000.00, "totalPrice": 48000.00},
      {"description": "Laptop", "quantity": 3, "unitPrice": 30000.00, "totalPrice": 90000.00},
      {"description": "monitor", "quantity": 4, "unitPrice": 6000.00, "totalPrice": 24000.00},
      {"description": "Router", "quantity": 1, "unitPrice": 1000.00, "totalPrice": 1000.00}
    ];
  }
  getTotal(){
    let total: number = 0;
    this.getInvoiceDetails().forEach(i=> total += i.totalPrice);
    return(total)
  }
}
