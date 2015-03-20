define({ "api": [
  {
    "type": "post",
    "url": "/sessions",
    "title": "Initialize a new session for the given email address.",
    "version": "1.0.0",
    "name": "PostSessions",
    "group": "Sessions",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nSet-Cookie: token=I3k5E18oV...dGjfHe6ciyyY; expires=Sun, 20 Mar 2016 10:46:19 GMT",
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
    "filename": "server/main.js",
    "groupTitle": "Sessions",
    "sampleRequest": [
      {
        "url": "http://localhost:9090/sessions"
      }
    ]
  }
] });