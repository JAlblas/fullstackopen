# 0.4: New note diagram 

**Create a similar diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button**


```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server-->>browser: The server sends a 302 towards /exampleapp/notes
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: the HTML file
        deactivate server

            Note right of browser: The browser starts displaying the HTML


        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the CSS file
        deactivate server

        Note right of browser: The browser starts displaying the CSS styling


        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{"content":"buzz sasha mochi <3","date":"2023-05-17T10:22:17.669Z"}, ... ]
        deactivate server

        Note right of browser: The browser executes the callback function that renders the notes

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
        activate server
        server-->>browser: the favicon file
        deactivate server
```