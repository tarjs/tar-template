import typescriptLogo from '../typescript.svg'
import viteLogo from '/vite.svg'
import style from './HelloWorld.css?inline'
import { createFn, createObserver } from 'tar-util'

export default class HelloWorld extends HTMLElement {
  private shadow: ShadowRoot | undefined
  private data: {
    count: number
  }
  constructor() {
    super()
    this.render()
    this.data = {
      count: 1
    }
    const data = this.data
    function count() {
      data.count = data.count + 1
    }
    createObserver(data, (this.shadow?.querySelector('.card') as HTMLElement))
    createFn((this.shadow?.querySelector('.card') as HTMLElement), count)
  }
  render() {
    const styleDom = document.createElement('style')
    styleDom.innerHTML = style
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.shadow.innerHTML = `
    <div id="hello-world">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button" data-bind="count" $click="count"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
    `
    this.shadow.appendChild(styleDom)
  }
}