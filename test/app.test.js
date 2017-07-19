const request = require("supertest")
const express = require("express");
const expect = require("chai").expect

const app = require("../app")

describe("app route", () => {
  describe("GET /submission", () => {
    it("should return two submissions", (done) => {
      request(app)
        .get("/submission")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect((res) => {
          expect(res.body.submissions.length).to.equal(2)
        })
        .expect(200, done)
    })
  })
  describe("POST /submission", () => {
    it("should return post submission", (done) => {
      request(app)
        .post("/submission")
        .send({
          newSubmission: {
            name: "lauri",
            questName: "Harvest Tour: Jurassic Frontier",
            questId: 1,
            weapon: "Hammer",
            style: "Guild",
            min: 11,
            sec: 12
          },
          armorSet: {
            setName: 'tt',
            head: { name: 'headarmor', id: 1 },
            torso: { name: 'torsoarmor', id: 2 },
            arms: { name: 'armsarmor', id: 3 },
            waist: { name: 'waistarmor', id: 4 },
            feet: { name: 'feetarmor', id: 5 },
            charm: {
              slots: '2',
              skill1: {
                id: 1
              },
              amount1: '-4',
              skill2: {
                id: 2
              },
              amount2: '13'
            }
          }
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect((res) => {
          expect(res.body.newSubmission.name).to.equal("lauri")
          expect(res.body.newSubmission.questname).to.equal("Harvest Tour: Jurassic Frontier")
          expect(res.body.newSubmission.questtime).to.equal("00:11:12")
          expect(res.body.newSubmission.weapon).to.equal("Hammer")
          expect(res.body.newSubmission.style).to.equal("Guild")
          expect(res.body.newSubmission.setid).to.equal(1)
        })
        .expect(200, done)
    })
  })
  describe("GET /quest", () => {
    it("should return all 6 quests", (done) => {
      request(app)
        .get("/quest")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect((res) => {
          expect(res.body.items.length).to.equal(6)
        })
        .expect(200, done)
    })
  })
})