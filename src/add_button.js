;(function() {
  kintone.events.on('app.record.index.show', function(event) {
    // 増殖バグを防ぐ
    if (document.getElementById('my_index_button') !== null) {
      return event
    }

    var myIndexButton = document.createElement('button')
    myIndexButton.id = 'my_index_button'
    myIndexButton.innerHTML = '一覧のボタン'
    kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton)
    return event
  })
})()
