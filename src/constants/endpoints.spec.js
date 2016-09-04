import should from 'should'
import * as constants from './endpoints'

describe('constants/endpoints', () => {
  describe('exports', () => {
    it('should not export DEFAULTS', (done) => {
      constants.should.not.have.property('DEFAULTS')
      should.not.exist(constants.DEFAULTS)
      done()
    })

    it('should export objects with endpoint & defaults keys', (done) => {
      Object.keys(constants).every(k => {
        let v = constants[k]
        return v.hasOwnProperty('endpoint') && v.hasOwnProperty('defaults')
      }).should.be.true()
      done()
    })

  })
})
