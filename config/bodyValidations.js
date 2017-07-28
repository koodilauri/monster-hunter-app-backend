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
              pattern: /^(Guild|Striker|Adept|Aerial)$/
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
        }
      }
    }
  }
}