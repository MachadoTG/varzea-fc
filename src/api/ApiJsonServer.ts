import ApiBase from "./ApiBase";

const ApiJsonServer = new ApiBase("http://192.168.0.102:3000");

const listUsuario = async (): Promise<any> => {
    const { data } = await ApiJsonServer.axios.get("/usuario");
    return data
};
const getUsuario = async (id: number): Promise<any> => {
    const { data } = await ApiJsonServer.axios.get("/usuario/" + id);
    return data
};

export { listUsuario, getUsuario };

