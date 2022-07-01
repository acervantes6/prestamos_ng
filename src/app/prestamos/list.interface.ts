export interface ListElement {
position: number;
monto: number;
nombre: string;
correo: string;
}

export const ELEMENT_DATA: ListElement[] = [
  { position: 1, monto: 19000, nombre: 'Armando', correo: 'armando@correo.com' },
  { position: 2, monto: 0, nombre: '', correo: '' },
  { position: 3, monto: 0, nombre: '', correo: '' },
  { position: 4, monto: 0, nombre: '', correo: '' },

];
