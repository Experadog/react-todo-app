import { baseURL } from "../../../../configs"



export const API = {
  register: (data) => {
    return fetch(`${baseURL}/user/`, {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
}