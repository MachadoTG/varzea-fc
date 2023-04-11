interface IBase {
    id: number;
    creationDate: string;
    creationUser: number;
    alterationDate: string;
    alterationUser: number;
}

interface IUsuario extends IBase {
    nome: string;
    email: string;
    telephone: string;
}

interface ITime extends IBase {
    usuarioId: number;
    nome: string;
}

interface ITipoMembro extends IBase {
    descripcion: string;
}

interface IMembro extends IBase {
    tipoMembroId: number;
    usuarioId: number;
    timeId: number;

}

interface IEventoDia extends IBase {
    titulo: string;
    descricao: string;
}

export type { IBase, IUsuario, ITime, IMembro, ITipoMembro, IEventoDia };

