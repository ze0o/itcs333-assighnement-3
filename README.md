# 🎓 UOB Student Nationality Data: JavaScript Fetch API

A client-side web page that loads live enrollment statistics from the **Bahrain Open Data Portal** API with the
JavaScript **Fetch API** and builds an HTML table from the JSON response. Built for ITCS333 (Internet Software
Development) at the University of Bahrain, assignment 3.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Pico CSS](https://img.shields.io/badge/Pico%20CSS-13171F)
![REST API](https://img.shields.io/badge/REST%20API-JSON-009688)

---

## What it does

1. When the page loads (`DOMContentLoaded`), it calls the `data.gov.bh` dataset
   *University of Bahrain Students Enrollment by Nationality*, filtered to **bachelor programs in the IT college**
2. Checks the HTTP status and parses the JSON response
3. Creates one table row per record: year, semester, program, nationality, college and number of students
4. Shows `N/A` for any missing field, and logs fetch errors to the console instead of breaking the page

## How it works

```
index.html loads ──► index.js ──► fetch(API URL) ──► data.gov.bh
                                      │
                                      ▼
                         response.json() ──► DISPLAY(records)
                                      │
                                      ▼
                         <tr> rows appended to #data tbody
```

## Run it

No build step or server code. Clone the repo and open `index.html` in a browser
(or serve the folder, for example with the VS Code Live Server extension):

```bash
git clone https://github.com/ze0o/itcs333-assighnement-3.git
cd itcs333-assighnement-3
python3 -m http.server 8000     # then open http://localhost:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Page layout and the empty table, styled with Pico CSS |
| `index.js` | Fetches the data and fills the table |

## Related

The same data is rendered on the server with PHP in
[itcs333-assighnement-2](https://github.com/ze0o/itcs333-assighnement-2): a useful side-by-side comparison of
server-side and client-side rendering.

---

Made by **Abdulaziz Abdulhadi** · [GitHub](https://github.com/ze0o) · [LinkedIn](https://www.linkedin.com/in/abdulaziz-abdulhadi-5510a1332) · [Portfolio](https://3ziz-portfolio.netlify.app/)
