const request = require("supertest")
const express = require('express');
const expect = require("chai").expect

const app = require("../app")

describe("app route", () => {
  describe("GET /submission", () => {
    it("should return two submissions", (done) => {
      request(app)
        .get("/submission")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)        
        .expect( (res) => {
          expect(res.body.submissions.length).to.equal(2)
        })
        .expect(200, done)
    })
  })
})