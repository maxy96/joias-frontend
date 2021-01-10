export default class Persona{
    private phone: string;

    constructor(private nombre: string, private apellido: string, private email: string){
        this.phone = '';
    }

    private fullName(): string{
        return this.nombre + ' ' + this.apellido;
    }

    enviarWpp(){
        window.open(`https://api.whatsapp.com/send?phone=${this.phone}&text=${this.fullName()}`, '_blanck');  
    }

}
