import { refresh } from "../index.js";
import { scoresName } from "../index.js";


export const refreshPage = () => {
refresh.addEventListener('click', () => {
  scoresName.innerHTML = ``
})
}