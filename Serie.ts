export class Serie {

    name: string;
    id: number;
    channel: string;
    seasons: number;
    imagen: string;
    description: string;
    url:string;

    constructor(id:number,name: string ,channel:string, seasons:number, description: string,url:string,imagen: string){
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.id=id;
        this.imagen=imagen;
        this.description=description;
        this.url=url;
    }

}