import axios from "axios";

const URL = `https://api.github.com/users`

const data = {

  get_Data: (name) => axios.get(`${URL}/${name}`),

  get_Repos: (name, page) => axios.get(`${URL}/${name}/repos?page=${page}`)

}

export default data