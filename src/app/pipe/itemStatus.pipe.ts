import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemStatus'
})
export class ItemStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let status:string;
    switch (value) {
      case 'T0':
        status = '一時保存';
        break;
      case 'T1':
        status = '取り置き';
        break;
        case 'T2':
        status = '登録済';
        break;
      case 'T3':
        status = '会計済';
        break;
        case 'T4':
        status = '商品部承認済';
        break;
      case 'T5':
        status = 'メーカー承認済';
        break;
        case 'T6':
        status = '仕入済';
        break;
        case 'T7':
        status = 'お渡し済';
        break;
      default:
        status = '未知';
        break;
    }
    return status;
  }

}
