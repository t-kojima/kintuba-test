/* eslint-disable no-undef */

describe('example', () => {
  it('ボタンが追加されていること', async () => {
    await kintone.events.do('app.record.index.show')
    const button = document.getElementById('my_index_button')
    chai.assert.equal(button.innerHTML, '一覧のボタン')
  })
})
