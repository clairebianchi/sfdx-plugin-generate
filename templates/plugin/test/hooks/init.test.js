const {expect, test} = require('@anycli/test')

describe('hooks', () => {
  test
    .stdout()
    .hook('init', {id: 'mycommand'})
    .do(output => expect(output.stdout).to.contain('example hook running mycommand'))
    .it('shows a message')
})