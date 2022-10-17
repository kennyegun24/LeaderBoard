import { namVal } from "../index.js";
import { score } from "../index.js";
import { scoresName } from "../index.js";

export const addNameScroe = () => {

  const nameAndScore = document.createElement('p')

  if(namVal.value == 0 || score.value == 0) {
    alert('Put in a name and score')
    return false
  }else {
    nameAndScore.innerText = namVal.value + ':  ' + score.value
  scoresName.append(nameAndScore)

    return true
  }

}