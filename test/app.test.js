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
            quest: {
              name: "Harvest Tour: Jurassic Frontier",
              id: 1
            },
            weapon: {
              name: "Lance",
              id: 2
            },
            style: "Striker",
            minutes: 11,
            seconds: 12
          },
          armorSet: {
            setName: "tt",
            armorType: "Blademaster",
            selectedWeapon: { equipment: { name: "Hammer", id: 1 } },
            selectedHead: { equipment: { name: 'headarmor', id: 1 } },
            selectedTorso: { equipment: { name: 'torsoarmor', id: 2 } },
            selectedArms: { equipment: { name: 'armsarmor', id: 3 } },
            selectedWaist: { equipment: { name: 'waistarmor', id: 4 } },
            selectedFeet: { equipment: { name: 'feetarmor', id: 5 } },
            selectedCharm: {
              equipment: {
                slots: '2',
                skill1: 1
                ,
                amount1: '-4',
                skill2: 2
                ,
                amount2: '13'
              }
            }
          },
          styleAndArts: {
            selectedStyle: "Guild"
          }
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect((res) => {
          expect(res.body.newSubmission.name).to.equal("lauri")
          expect(res.body.newSubmission.questname).to.equal("Harvest Tour: Jurassic Frontier")
          expect(res.body.newSubmission.questtime).to.equal("00:11:12")
          expect(res.body.newSubmission.weaponname).to.equal("Hammer")
          expect(res.body.newSubmission.style).to.equal("Guild")
          expect(res.body.newSubmission.setid).to.equal(2)
        })
        .expect(200, done)
    })
  })
  describe("GET /quest", () => {
    it("should return all 8 quests", (done) => {
      request(app)
        .get("/quest")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect((res) => {
          expect(res.body.items.length).to.equal(8)
        })
        .expect(200, done)
    })
  })
})