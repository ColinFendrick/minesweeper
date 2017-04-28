const API_BASE = 'https://minesweeper-api.herokuapp.com/'

const newGame = difficulty => {
  const url = [API_BASE, 'games/', difficulty].join('')
  return window.fetch(url, {
    method: 'POST'
  }).then(r => r.json())
}

const getGame = id => {
  const url = [API_BASE, 'games/', id].join('')
  console.log(url)
  return window.fetch(url, {
    method: 'GET'
  }).then(r => r.json())
  // .then(data => {
  //   gamestate = data
  // })
}

const check = (id, row, col) => {
  const url = [API_BASE, 'games/', id, '/check'].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'row': row,
      'col': col
    })
  }).then(r => r.json())
}

const flag = (id, row, col) => {
  const url = [API_BASE, 'games/', id, '/flag'].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'row': row,
      'col': col
    })
  }).then(r => r.json())
}

export { newGame, getGame, check, flag }
