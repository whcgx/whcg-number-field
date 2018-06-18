import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

/*
 * `WhcgNumberField`
 * 
 * @customElement
 * @polymer
 
 */
class WhcgNumberField extends PolymerElement {
    static get template() {
        return html `
      
    <vaadin-text-field value="{{value}}" label="{{label}}" placeholder="{{placeholder}}" theme="align-right" prevent-invalid-input pattern="[0-9]*" >
        <div slot="suffix">{{suffix}}</div>
    </vaadin-text-field>

    `;
    }

    static get properties() {

        return {

            label: {
                type: String,
                notify: false,
                readOnly: false,
            },
            value: {
                type: String,
                notify: true,
                readOnly: false,
            },
            placeholder: {
                type: String,
                notify: false,
                readOnly: false,
            },
            suffix: {
                type: String,
                notify: false,
                readOnly: false,
            },
        }
    }
    connectedCallback() {
        super.connectedCallback();
        let event = new CustomEvent('childrenattached', {bubbles: true, composed: true});
        this.dispatchEvent(event);
    }

}

window.customElements.define('whcg-number-field', WhcgNumberField);

export { WhcgNumberField };
