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
        .expect((res) => {
          expect(res.body.submissions.length).to.equal(2)
        })
        .expect(200, done)
    })
  })
  describe("POST /submission", () => {
    it("should return submission", (done) => {
      request(app)
        .post("/submission")
        .send({
          newSubmission: {
            name: 'lauri',
            questName: 'Wheel of Time',
            questId: 14,
            weapon: "Hammer",
            style: "Guild",
            Min: '11',
            Sec: '12'
          }
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body.newSubmission.name).to.equal('lauri')
          expect(res.body.newSubmission.questname).to.equal('Wheel of Time')
          expect(res.body.newSubmission.questtime).to.equal('00:11:12')
          expect(res.body.newSubmission.weapon).to.equal('Hammer')
          expect(res.body.newSubmission.style).to.equal('Guild')
          expect(res.body.newSubmission.setid).to.equal(null)
        })
        .expect(200, done)
    })
  })
  describe("GET /questlist", () => {
    it("should return quest: wheel of time (id:14)", (done) => {
      request(app)
        .get("/questlist")
        .query({ q: 'wheeL', language: 'javascript' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body.items.length).to.equal(1)
          expect(res.body.items[0].value).to.equal('14')
        })
        .expect(200, done)
    })
  })
})