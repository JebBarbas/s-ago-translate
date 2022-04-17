export default class AgoError extends Error{
    constructor(message?:string){
        super(message)
        this.name = 'AgoError'
    }
}