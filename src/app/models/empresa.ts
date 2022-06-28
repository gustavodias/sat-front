export interface Page {
    content: Array<Empresa>;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort?: any;
    numberOfElements: number;
    first: boolean;
};

export interface Empresa{
    cod?: any;
    nome: String;
}