# 0.6: New note in Single page app diagram

**Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.**


```mermaid
    sequenceDiagram
        participant browser
        participant server

         browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: The server sends a 201 response with the message: {"message":"note created"}
        deactivate server

        Note right of browser: The JS pushes the new note to a lit. The browser renders the updated list of notes
```