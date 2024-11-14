 
import { LitElement, html, css } from 'https://unpkg.com/lit?module';

class SurveyCard extends LitElement {
  static get properties() {
    return {
      questions: { type: Array },
    };
  }

  constructor() {
    super();
    // Define the survey questions
    this.questions = [
      { id: 1, text: "How satisfied are you with our service?", type: "rating" },
      { id: 2, text: "What could we improve?", type: "text" },
      // Add more questions as needed
    ];
  }

  render() {
    return html`
      <ha-card header="Survey">
        <div class="survey-container">
          ${this.questions.map(
            (question) => html`
              <div class="question">
                <p>${question.text}</p>
                ${this.renderQuestionInput(question)}
              </div>
            `
          )}
        </div>
      </ha-card>
    `;
  }

  renderQuestionInput(question) {
    switch (question.type) {
      case "rating":
        return html`
          <select>
            ${[1, 2, 3, 4, 5].map(
              (rating) => html`<option value="${rating}">${rating}</option>`
            )}
          </select>
        `;
      case "text":
        return html`<textarea rows="3"></textarea>`;
      default:
        return html``;
    }
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
      }
      .survey-container {
        display: flex;
        flex-direction: column;
      }
      .question {
        margin-bottom: 16px;
      }
      p {
        font-weight: bold;
      }
      select,
      textarea {
        width: 100%;
        margin-top: 8px;
      }
    `;
  }
}

customElements.define("survey-card", SurveyCard);
