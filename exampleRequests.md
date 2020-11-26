connect to : ws://localhost:3001

Initialise:
{"action":"_initialise", "params": {"name": "tom"}}

List All Clients:
{"action":"_listAllClients"}

Send Message To Recipient:
{"action":"_sendMessageToRecipent", "message":{"recipentClientID":"", "value":"test"}}