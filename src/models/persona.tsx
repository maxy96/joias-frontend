export default class Persona{
    private phone: string;

    constructor(private nombre: string, private apellido: string, private email: string){
        this.phone = process.env.REACT_APP_NRO_PHONE || '+5493794040913';
    }

    private fullName(): string{
        return this.nombre + ' ' + this.apellido;
    }

    private message(): string{
        //%0D%0A Salto de linea en wpp
        return `Hola me llamo ${this.fullName()} y mi correo es ${this.email} 
        %0D%0A *ESTE MENSAJE SE PUEDE MODIFICAR*`;
    }

    enviarWpp(){
        window.open(`https://api.whatsapp.com/send?phone=${this.phone}&text=${this.message()}`, '_blanck');  
    }

}
