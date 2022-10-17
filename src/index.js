import './style.css'

import { addNameScroe } from './modules/newScore.js'
import { clearInput } from './modules/clearInput.js'
import { refreshPage } from './modules/refresh'

export const score = document.querySelector('.score')
export const namVal = document.querySelector('.name')
export const scoresName = document.querySelector('.scores_name')
export const refresh = document.querySelector('.refresh')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  addNameScroe()
  clearInput()
})
refreshPage()