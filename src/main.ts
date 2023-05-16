import './style.css'
import HelloWorld from './components/HelloWorld'
window.customElements.define('hello-world', HelloWorld)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <hello-world></hello-world>
`
