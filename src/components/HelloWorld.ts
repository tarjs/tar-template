import typescriptLogo from '../typescript.svg'
import tarLogo from '../tar.svg'
import viteLogo from '/vite.svg'
import style from './HelloWorld.css?inline'
import { createFn, createObserver, createStyle } from 'tar-util'

export default class HelloWorld extends HTMLElement {
  private shadow: ShadowRoot | undefined
  private data: {
    count: number
  }
  constructor() {
    super()
    this.render()
    createStyle(this.shadow!, style)

    const count = () => {
      this.data.count = this.data.count + 1
    }
    
    this.data = createObserver({
      count: 1
    }, this.shadow)
    createFn(this.shadow!, { count })
  }
  render() {
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.shadow.innerHTML = `
    <div id="hello-world">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://github.com/tarjs/TarUtil" target="_blank">
        <img src="${tarLogo}" class="logo tar" alt="tarjs logo" />
      </a>
      <h1>Vite + TypeScript + TarUtil</h1>
      <div class="card">
        <button id="counter" type="button" data-bind="count" $click="count">count: $t</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
    `
  }
}