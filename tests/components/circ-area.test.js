import { describe, it } from 'node:test'
import assert from 'node:assert'
import { circArea } from '../../src/components/circ-area.js'

describe('test suite for circArea', () => {
  it('validate area calculus for a circle', () => {
    assert.deepStrictEqual(circArea(5), 78.53981633974483)
  })

  it('validate zero in zero out', () => {
    assert.deepStrictEqual(circArea(0), 0)
  })

  it("validate ausent numbers throws an error", () => {
    function errorThrowingWrapper() {
      circArea();
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: expected number but got undefined/,
      "did not throwed the expected error"
    );
  });

  it("validate input types different from number throws an error", () => {
    function errorThrowingWrapper() {
      circArea("5");
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: expected number but got string/,
      "did not throwed the expected error"
    );
  });

})