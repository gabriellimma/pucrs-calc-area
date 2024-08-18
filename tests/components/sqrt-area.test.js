import { describe, it } from 'node:test'
import assert from 'node:assert'
import { sqrtArea } from '../../src/components/sqrt-area.js'

describe('test suite for sqrtArea', () => {
  it('validate area calculus for a square', () => {
    assert.deepStrictEqual(sqrtArea(5, 5), 25)
  })

  it('validate zero in zero out', () => {
    assert.deepStrictEqual(sqrtArea(0, 0), 0)
  })

  it("validate ausent numbers throws an error", () => {
    function errorThrowingWrapper() {
      sqrtArea(0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Missing required argument/,
      "Não lançou o erro esperado com a mensagem correta."
    );
  });

  it("validate input types different from number throws an error", () => {
    function errorThrowingWrapper() {
      sqrtArea("5", 0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Argument #0: expected number but got string/,
      "Não lançou o erro esperado com a mensagem correta."
    );
  });

})