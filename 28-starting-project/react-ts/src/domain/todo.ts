export class Todo {
    idx: number;
    id: string;
    text: string;

    constructor(index: number,todoText: string) {
        this.idx = index;
        this.id = new Date().toISOString();
        this.text = todoText;
    }
}