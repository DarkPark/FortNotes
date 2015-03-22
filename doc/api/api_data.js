define({ "api": [
  {
    "type": "delete",
    "url": "/sessions/:id",
    "title": "Terminate the given user session.",
    "version": "1.0.0",
    "name": "deleteSessions",
    "group": "Session_Item",
    "permission": [
      {
        "name": "authUser",
        "title": "Authorized user access only.",
        "description": "<p>Requests are valid only in case the user is authorized and have a valid active session.</p> "
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User session ID.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --include --header \"Cookie: token=5nNOF+dNQaHvq...\" --request DELETE http://localhost:9090/sessions/128",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n\n{\"error\":\"invalid session\"}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/sessions.js",
    "groupTitle": "Session_Item",
    "sampleRequest": [
      {
        "url": "http://localhost:9090/sessions/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/sessions/:id",
    "title": "Activate a new session with the code sent to the user email address.",
    "version": "1.0.0",
    "name": "putSessions",
    "group": "Session_Item",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>User session ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>Session activation code.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --include --data \"code=fd28f002ea673d316e\" --request PUT http://localhost:9090/sessions/128",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Generated user session ID???.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\"ok\": true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n\n{\"error\": \"invalid session\"}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/sessions.js",
    "groupTitle": "Session_Item",
    "sampleRequest": [
      {
        "url": "http://localhost:9090/sessions/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/sessions",
    "title": "Receive a list of all authorized user sessions.",
    "version": "1.0.0",
    "name": "getSessions",
    "group": "Sessions",
    "permission": [
      {
        "name": "authUser",
        "title": "Authorized user access only.",
        "description": "<p>Requests are valid only in case the user is authorized and have a valid active session.</p> "
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --include http://localhost:9090/sessions",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/sessions.js",
    "groupTitle": "Sessions",
    "sampleRequest": [
      {
        "url": "http://localhost:9090/sessions"
      }
    ]
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "Initialize a new session for the given email address.",
    "version": "1.0.0",
    "name": "postSessions",
    "group": "Sessions",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Users email address.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --include --data \"email=test@gmail.com\" http://localhost:9090/sessions",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Generated user session ID.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 148\nSet-Cookie:token=5nNOF+dNQaHvq/klxbRtQ2BwvxbnQ/FuhqIQ7UcbdlSNWZRf/S9MRHQ0/4BYMBQMYizh0DScOTqUlVYg7fyCdiw7JowGM3Q7HrdTCqqEO9Q1LVEBPXtF1ry+XLVKB+xi; expires=Tue, 22 Mar 2016 17:54:03 GMT\n\n{\"id\": 128}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n\n{\"error\": \"empty or invalid email address\"}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/sessions.js",
    "groupTitle": "Sessions",
    "sampleRequest": [
      {
        "url": "http://localhost:9090/sessions"
      }
    ]
  }
] });