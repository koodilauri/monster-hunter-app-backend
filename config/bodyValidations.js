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
              pattern: /^([a-zA-Z0-9':!?]+(-| )?)*$/i
            },
            quest: {
              name: {
                type: "string",
                pattern: /^([a-zA-Z0-9':!?]+(-| )?)*$/i
              },
              id: {
                type: 'number',
                gt: 0
              }
            },
            questTime: {
              type: 'any',
              optional: true
            },
            weapon: {
              name: {
                type: "string",
                pattern: /^([a-zA-Z0-9':&"!?,.]+(-| )?)*$/i
              },
              id: {
                type: 'number',
                gt: 0
              }
            },
            style: {
              type: "string",
              pattern: /^([a-zA-Z0-9']+(-| )?)*$/i,
              maxLength: 7
            },
            min: {
              type: 'number',
              gte: 0,
              lte: 49
            },
            sec: {
              type: 'number',
              gte: 0,
              lte: 59
            }
          }
        },
        armorSet: { type: "object" },
      }
    }
  }
}