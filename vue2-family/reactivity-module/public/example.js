import { reactive, Watcher } from '../src'

const data = reactive({
  msg: 'Hello World',
  number: 1,
})

new Watcher(() => {
  document.getElementById('app').innerHTML = `
  <p>请在控制台输入data，分别改变data.msg尝试效果</p>
  <input type="text" value="${data.msg}"/>
  msg is ${data.msg} <br>
  msg is ${data.number} <br>
  `
})


const app = document.getElementById('app')

app.addEventListener('input', (e) => {
  document.addEventListener('keyup', (e) => {
    // console.log(e.key);
    if (e.key === 'Enter' || e.key === 'Escape') data.msg = e.target.value
  })
})

window.data = data
