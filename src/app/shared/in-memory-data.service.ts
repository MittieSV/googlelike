import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const search = [
    {title: 'Porn Hub',
    description: 'qiweiuyq qweuyiuyiqw iuqwyeiuyqwe iuqyweuqwyei iquweyiuyiqwe uiqeywiuqywe quiweyiuyqwe'},
    {title: 'Porn Hub2',
    description: 'qiweiuyq qweuyiuyiqw iuqwyeiuyqwe iuqyweuqwyei iquweyiuyiqwe uiqeywiuqywe quiweyiuyqwe'},
    {title: 'Porn Hub3',
    description: 'qiweiuyq qweuyiuyiqw iuqwyeiuyqwe iuqyweuqwyei iquweyiuyiqwe uiqeywiuqywe quiweyiuyqwe'}
    ];
    return {search};
  }

}
