export class Skill {
    public name: string;
	public fileName: string;
	public description: string;

    constructor(name: string, fileName: string, description: string) {
        this.name = name;
        this.fileName = fileName;
        this.description = description;
    }
}