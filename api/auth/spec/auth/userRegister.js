'use strict';

var app = require('./../../../../../server.js');
var request = require('supertest');
var expect = require('chai').expect;
var mongoose = require('mongoose');
var userSchema = require('./../../../userModel.js');
var router = require('./../../../index.js');
// request = request('http://localhost:4500');

var newUser = new userSchema({
	username: 'steven', 
	password: 'pazzwordzz'
});

beforeEach(function(){
	mongoose.createConnection('mongodb://localhost/peacefulSplinter');
})

afterEach(function(done){
	mongoose.disconnect();
	return done();
})

//Can't get this describe to work, supertest?
describe('POST /api/v1/register', function(){
  it('responds with 200', function(done){
    request(app)
      .post('/api/v1/login')
      .expect(200, function(err){
      	console.log(err);
      });
  })
})

describe('User Registration', function(){

	var newUser = new userSchema({username: 'steven', password: 'pazzwordzz'});

	it('should exist', function(){
		expect(userSchema).to.exist;
	})

	it('should be an actual schema', function(){
		expect(userSchema).to.be.a('function');
	})

	it('should recognize correct schema prperties', function(){
		expect(newUser).to.exist;
		expect(newUser).to.have.property('username');
		expect(newUser).to.have.property('password');
	})

	it('should recognize correct user', function(){
		expect(newUser.username).to.equal('steven');
	})

	it('should recognize incorrect user', function(){
		expect(newUser.username).to.not.equal('steve');
	})

	it('should recognize correct password', function(){
		expect(newUser.password).to.equal('pazzwordzz');
	})

	it('should recognize incorrect password', function(){
		expect(newUser.password).to.not.equal('pazzwordzzzz');
	})

	it('should have a username value that is a String', function(){
		expect(newUser.username).to.be.a('string');
	})

	it('should have a password value that is a String', function(){
		expect(newUser.password).to.be.a('string');
	})

	it('should recognize correct username and incorrect password', function(){
		expect(newUser.username).to.equal('steven');
		expect(newUser.password).to.not.equal('posswad');	
	})

})