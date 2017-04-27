const API_BASE = 'https://minesweeper.herokuapp.com/'
const id = 1

const newGame = difficulty => {
  const url = [API_BASE, 'games/', difficulty].join('')
  window.fetch(url, {
    method: 'POST'
  }).then(r => r.json())
}

const getGame = () => {
  const url = [API_BASE, 'games/', id].join('')
  console.log(url)
  window.fetch(url, {
    method: 'GET'
  }).then(r => r.json())
}

const check = (row, col) => {
  const url = [API_BASE, 'games/', id, '/check'].join('')
  window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'row': row,
      'col': col
    })
  }).then(r => r.json())
}

const flag = (row, col) => {
  const url = [API_BASE, 'games/', id, '/flag'].join('')
  window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'row': row,
      'col': col
    })
  }).then(r => r.json())
}

export { newGame, getGame, check, flag }
