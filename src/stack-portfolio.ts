import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

interface Project {}

interface Stack {}

interface PortfolioData {
  projects: Project[];
  stacks: Stack[];
}

@customElement("stack-portfolio")
export class StackPortfolio extends LitElement {
  @property()
  data: PortfolioData = {
    projects: ["?"],
    stacks: ["!"],
  };

  render() {
    return html`<h1>Projects</h1>
      <ol>
        ${this.data.projects.map((d) => html`<li>${d}</li>`)}
      </ol>
      <h1>Stacks</h1>
      <ol>
        ${this.data.stacks.map((d) => html`<li>${d}</li>`)}
      </ol>`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "stack-portfolio": StackPortfolio;
  }
}
