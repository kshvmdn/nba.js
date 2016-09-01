import should from 'should'

import * as e from './'
import { ENDPOINTS as c } from './../constants'

describe('endpoints/index', () => {
  describe('exports', () => {
    it('should export all ENDPOINT constants', (done) => {
      should.equal(Object.keys(c).length, Object.keys(e).length)
      done()
    })

    it('should only export functions', (done) => {
      Object.keys(e).every(o => typeof e[o] === 'function').should.be.true()
      done()
    })
  })

  describe('requests', () => {
    it('should return as a Promise', (done) => {
      let request = e.allPlayers()
      request.should.be.Promise()
      done()
    })

    it('should callback with err/res', (done) => {
      e.allPlayers((err, res) => {
        should.exist(res)
        should.not.exist(err)
        done()
      })
    }).timeout(10000)
  })
})
