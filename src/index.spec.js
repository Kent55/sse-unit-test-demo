// import chai, { expect } from 'chai'
// import sinon from 'sinon'
// import sinonChai from 'sinon-chai'
// import sinonStubPromise from 'sinon-stub-promise'

const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')

const functions = require('./index')

chai.use(sinonChai)
chai.use(chaiAsPromised)
// sinonStubPromise(sinon)

describe('SSE Unit Test Demo', function () {
	this.timeout(8000)
	describe('mathematical function tests', function () {
		it('adds two numbers', function () {
			expect(functions.add(2, 2)).to.equal(4)
		})
	})

	describe('promise tests', function () {
		it('resolves the value after 5 seconds', function () {
			return expect(functions.resolveWithValue('SSE')).to.eventually.be.fulfilled.then(function (result) {
				expect(result).to.equal('SSE')
			})
		})
	})
})