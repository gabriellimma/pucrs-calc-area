import { describe, it } from 'node:test'
import assert from 'node:assert'
import { rectArea } from '../../src/components/rect-area.js'

describe('test suite for recttArea', () => {
  it('validate area calculus for a rectangle', () => {
    assert.deepStrictEqual(rectArea(5, 5), 25)
  })

  it('validate zero in zero out', () => {
    assert.deepStrictEqual(rectArea(0, 0), 0)
  })

  it("validate ausent numbers throws an error", () => {
    function errorThrowingWrapper() {
      rectArea(0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Missing required argument/,
      "Não lançou o erro esperado com a mensagem correta."
    );
  });

  it("validate input types different from number throws an error", () => {
    function errorThrowingWrapper() {
      rectArea("5", 0);
    }

    assert.throws(
      errorThrowingWrapper,
      /ByContractError: Argument #0: expected number but got string/,
      "Não lançou o erro esperado com a mensagem correta."
    );
  });

})