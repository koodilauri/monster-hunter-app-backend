exports.validations = {
  submission: {
    post: {
      type: "object",
      properties: {
        newSubmission: {
          type: "object",
          properties: {
            name: {
              type: "string",
              pattern: /^([a-zA-Z0-9':!?]+(-| )?)+$/i
            },
            quest: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  pattern: /^([a-zA-Z0-9':!?]+(-| )?)+$/i
                },
                id: {
                  type: 'number',
                  gt: 0
                }
              }
            },
            minutes: {
              type: 'number',
              gte: 0,
              lte: 49
            },
            seconds: {
              type: 'number',
              gte: 0,
              lte: 59
            }
          }
        },
        armorSet: {
          type: "object",
          properties: {
            armorType: {
              type: "string",
              pattern: /^(Blademaster|Gunner)$/
            },
            setName: {
              type: "string",
              pattern: /^[a-z A-Z0-9']+$/,
              required: true
            },
            selectedWeapon: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedHead: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedTorso: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedArms: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedWaist: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedFeet: {
              type: "object",
              properties: {
                equipment: {
                  type: "object",
                  properties: {
                    id: {
                      type: "number",
                      gt: 0
                    }
                  }
                }
              }
            },
            selectedCharm: {
              type: "object",
              properties: {
                equipment: {
                  type: "object"
                }
              }
            }
          }
        },
        styleAndArts: {
          type: "object",
          properties: {
            selectedStyle: {
              type: "string",
              pattern: /^(Guild|Striker|Adept|Aerial)$/,
            },
            selectedHunterArts: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "number"
                  }
                }
              },
              minLength: 1,
              maxLength: 3,
            },
          }
        }
      }
    }
  }
}