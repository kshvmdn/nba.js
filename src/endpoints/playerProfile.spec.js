import should from 'should'
import playerProfile from './playerProfile'

describe('endpoints.playerProfile', () => {
  it('returns Promise', (done) => {
    playerProfile().should.be.Promise()
    done()
  })

  it('returns error-first callback', (done) => {
    playerProfile((err, res) => {
      should.exist(res)
      should.not.exist(err)
      done()
    })
  })
})

