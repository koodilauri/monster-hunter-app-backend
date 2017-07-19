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
            questName: {
              type: "string",
              pattern: /^([a-zA-Z0-9':!?]+(-| )?)*$/i
            },
            questId: {
              type: 'number'
            },
            questTime: {
              type: 'any',
              optional: true
            },
            weapon: {
              type: "string",
              pattern: /^([a-zA-Z0-9':&"!?,.]+(-| )?)*$/i
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
        armorSet: { type: "object" }
      }
    }
  }
}