describe('kintone関数', () => {
  before(async () => {
    await schema.load()
    await fixture.load()
  })

  it('UI Versionが2であること', () => {
    const actual = kintone.getUiVersion()
    chai.assert.equal(actual, 2)
  })

  it('ログインユーザーが取得できること', () => {
    const actual = kintone.getLoginUser()
    chai.assert.equal(actual.name, 'no-name')
  })
})
