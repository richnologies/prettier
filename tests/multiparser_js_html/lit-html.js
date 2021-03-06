import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      mood: { type: String }
    };
  }

  constructor() {
    super();
    this.mood = 'happy';
  }

  render() {
    return html`
      <style
      
      
      >
                  .mood { color: green; }
      </style
      
      
      
      >

         Web            Components         are     <span 
      
      
      class="mood"      >${
        this.mood
      
      }</span
      
           >!
    `;
  }
}

customElements.define('my-element', MyElement);

const someHtml1 = html`<div       > hello ${world} </div     >`;
const someHtml2 = /* HTML */ `<div      > hello ${world} </div     >`;

html``

html`<my-element obj=${obj}></my-element>`;

html`  <${Footer}  >footer      content<//     >  `

html`  <div />  `

function HelloWorld() {
  return html`
    <h3>Bar List</h3>
    ${bars.map(bar => html`
       <p>${bar}</p>
    `)}
  `;
}

const trickyParens = html`<script> f((${expr}) / 2); </script>`;
const nestedFun = /* HTML */ `${outerExpr( 1 )} <script>const tpl = html\`<div>\${innerExpr( 1 )} ${outerExpr( 2 )}</div>\`</script>`;

const closingScriptTagShouldBeEscapedProperly = /* HTML */ `
  <script>
    const html = /* HTML */ \`<script><\\/script>\`;
  </script>
`;

const closingScriptTag2 = /* HTML */ `<script>const  scriptTag='<\\/script>'; <\/script>`;
