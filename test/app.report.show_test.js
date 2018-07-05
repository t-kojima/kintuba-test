describe('app.report.show', () => {
  const method = 'app.report.show'
  beforeEach(async () => await fixture.load())

  it('イベントが発火すること', async () => {
    const event = await kintone.events.do(method)
    assert.equal(event.type, method)
  })

  it('レコードオブジェクトが取得できないこと', async () => {
    const event = await kintone.events.do(method)
    assert.isUndefined(event.record)
    assert.isUndefined(event.records)
  })
})
