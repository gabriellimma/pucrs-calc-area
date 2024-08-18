import { describe, it } from 'node:test'
import assert from 'node:assert'
import { triArea } from '../../src/components/tri-area.js'

describe('test suite for triArea', () => {
  it('validate area calculus for a triagle', () => {
    assert.deepStrictEqual(triArea(5, 5), 12.5)
  })

  it('validate zero in zero out', () => {
    assert.deepStrictEqual(triArea(0, 0), 0)
  })

  it("validate ausent numbers throws an error", () => {
    function errorThrowingWrapper() {
      triArea(0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Missing required argument/,
      "did not throwed the expected error"
    );
  });

  it("validate input types different from number throws an error", () => {
    function errorThrowingWrapper() {
      triArea("5", 0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Argument #0: expected number but got string/,
      "did not throwed the expected error"
    );
  });

})