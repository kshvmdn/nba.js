import endpointRunner from './endpoints'

endpointRunner('LEAGUE_LEADERS', (err, res) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(JSON.stringify(res))
})

export default endpointRunner
