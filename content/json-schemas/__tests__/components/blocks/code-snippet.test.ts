﻿import { beforeAll, describe, expect, test } from '@jest/globals';
import type { ValidateFunction } from 'ajv';

import { compile } from '../../utils/ajv-utils';

let validate: ValidateFunction<unknown>;

beforeAll(async () => {
  try {
    // prettier-ignore
    validate = await compile('@microsoft/arbutus.json-schemas/components/blocks/code-snippet.schema.json');
  } catch (ex) {
    console.error(ex);
  }
});

describe('code snippet schema', () => {
  test('filling out all fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.code-snippet',
      code_: 'Test code',
      language: 'Test text',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('only filling out required fields should be valid', () => {
    const data = {
      contentComponentId: 'blocks.code-snippet',
      code_: 'Test code',
      language: 'Test text',
    };

    const valid = validate(data);

    if (!valid) console.log(validate.errors);
    expect(valid).toBe(true);
  });

  test('missing a required field [code_] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.code-snippet',
      language: 'Test text',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('missing a required field [language] should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.code-snippet',
      code_: 'Test code',
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });

  test('adding non-existing field should not be valid', () => {
    const data = {
      contentComponentId: 'blocks.code-snippet',
      code_: 'Test code',
      language: 'Test text',
      nonExistingField: 'Invalid field', // this random field is required for this testing
    };

    const valid = validate(data);

    expect(valid).toBe(false);
  });
});
