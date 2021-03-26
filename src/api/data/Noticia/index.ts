import api from "../../index";
import {INoticia}from "../../../interfaces/Noticia.interface"

class NoticiaData {
    show() {
        return api.get<INoticia[]>('noticias')
    }
}

export default new NoticiaData();