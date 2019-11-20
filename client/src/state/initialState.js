export const initialState = () =>({
    user: {
        id: localStorage.getItem("id") ? localStorage.getItem("id") : "",
        name: "",
        isLogged: localStorage.getItem("token") ? true : false
    },
    map: {
        _id: "",
        name: "",
        layers: []
    }
})