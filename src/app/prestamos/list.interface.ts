export interface ListElement {
position: string;
mejorTasa : number;
tasaPromedio: number;
tasaBancos: number;
}

export const ELEMENT_DATA: ListElement[] = [
  { position: 'Tasa de interés anual:', mejorTasa: 0, tasaPromedio: 0, tasaBancos: 0 },
  { position: 'Pago mensual: ', mejorTasa: 0, tasaPromedio: 0, tasaBancos: 0 }
];
