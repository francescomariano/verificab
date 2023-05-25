export class Streaming {
    brani: Brano[];
    artisti: Artista[];
}

export class Brano {
    id: number;
    nome: string;
    artista: string;
    durata: number;    
}

export class Artista {
    id: number;
    nome: string;
    brani: number;
}
