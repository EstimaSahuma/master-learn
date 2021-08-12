export interface Opcoes{
    id: number;
    pergunta_id: number;
    texto: string;
    avatar: string;
    status: number;//Quando for 0 é incorreta e 1 correta
}