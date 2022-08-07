export class Skill {
    public name: string;
	public fileName: string;
	public description: string;
    public url: string;

    constructor(name: string, fileName: string, description: string, url: string) {
        this.name = name;
        this.fileName = fileName;
        this.description = description;
        this.url = url;
    }
}