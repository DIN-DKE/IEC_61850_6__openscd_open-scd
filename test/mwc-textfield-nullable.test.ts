import { html, fixture, expect } from '@open-wc/testing';
import { TextFieldNullable } from '../src/mwc-textfield-nullable.js';

describe('Nullable Textfield', () => {
  let element: TextFieldNullable;
  beforeEach(async () => {
    element = await fixture(
      html`<mwc-textfield-nullable></mwc-textfield-nullable>`
    );
  });

  describe('with a missing attribute', () => {
    beforeEach(async () => {
      element.null = true;
    });

    it('has a persistant helper', () => {
      expect(element).to.have.property('helperPersistent', true);
    });

    it('has a disabled textfield', () => {
      expect(element).to.have.property('disabled', true);
    });

    it('does not show anything in the textfield', () => {
      expect(element).to.have.property('value', '');
    });

    it('displays default value of the attribute in the helper if default value is present', () => {
      element.defaultValue = 'Jakob';
      expect(element).to.have.property('helper', 'Default: Jakob');
    });

    it('displays "No default value" in the helper if default value is present', () => {
      expect(element).to.have.property('helper', 'No default value');
    });
  });

  describe('with a non empty attribute', () => {
    beforeEach(async () => {
      element.null = false;
    });

    it('has a non persistant helper', () => {
      expect(element).to.have.property('helperPersistent', false);
    });

    it('has a non disabled textfield', () => {
      expect(element).to.have.property('disabled', false);
    });

    it('displays helper as defined', () => {
      element.helper = 'Describe';
      expect(element).to.have.property('helper', 'Describe');
    });
  });
});
