export class ResultadosQuery {

    contextWords: string;
    docId: number;
    docName : string;
    ir : number;
    path : string;

    constructor(contextWords?: string, docId?: number, docName?: string, ir?: number, path?: string) {
        this.contextWords = contextWords ? contextWords : "";
        this.docId = docId ? docId : 0;
        this.docName = docName ? docName: "";
        this.ir = ir ? ir : 0;
        this.path = path ? path : "";
    }


}
