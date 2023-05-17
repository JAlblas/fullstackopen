# 0.5: Single page app diagram

**Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.**


```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document
        deactivate server

        Note right of browser: The browser starts displaying the HTML

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: CSS file
        deactivate server

        Note right of browser: The browser starts styling the page with the CSS rules


        browser->>server: GET hhttps://studies.cs.helsinki.fi/exampleapp/spa.js
        activate server
        server-->>browser: the Javascript  file
        deactivate server

        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{"content":"buzz sasha mochi <3","date":"2023-05-17T10:22:17.669Z"}, ... ]
        deactivate server

        Note right of browser: The browser executes the callback function, that sets a notes variable and renders the notes

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
        activate server
        server-->>browser: the favicon file
        deactivate server
```