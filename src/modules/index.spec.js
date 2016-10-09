import should from 'should'

import e from './'

describe('modules/index', () => {
  it('should export `data` and `stats` objects', (done) => {
    e.should.have.property('data')
    e.should.have.property('stats')
    done()
  })
})
