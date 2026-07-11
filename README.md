<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:020617,50:0f172a,100:2563eb&text=Srijan%20Shukla&fontColor=ffffff&fontSize=48&fontAlignY=38&desc=Software%20Developer%20%E2%80%A2%20Backend%20Systems%20%E2%80%A2%20Problem%20Solving&descAlignY=58&animation=fadeIn"/>

<a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=21&pause=1200&color=60A5FA&center=true&vCenter=true&width=700&lines=Building+systems%2C+not+just+screens.;REST+APIs+%E2%86%92+Auth+%E2%86%92+Real-Time+%E2%86%92+Caching;Going+deeper+into+DSA+and+backend+engineering." alt="Typing SVG"/>
</a>

<br/><br/>

<a href="mailto:pretest0505@gmail.com">
<img src="https://img.shields.io/badge/EMAIL-0F172A?style=for-the-badge&logo=gmail&logoColor=white"/>
</a>

<a href="https://github.com/PREPMND">
<img src="https://img.shields.io/badge/GITHUB-0F172A?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

<br/>

## `> whoami`

```text
Srijan Shukla
B.Tech Computer Science
Maharaja Agrasen Institute of Technology
CGPA: 9.48 / 10
```

I build full-stack applications with a growing focus on **backend systems and application reliability**.

<table>
<tr>
<td>⚙️ API Architecture</td>
<td>🔐 Auth & Authorization</td>
</tr>
<tr>
<td>⚡ Real-Time Systems</td>
<td>🧠 Caching & Reliability</td>
</tr>
<tr>
<td>🗄️ Database Modelling</td>
<td>🧩 Data Structures & Algorithms</td>
</tr>
</table>

<br/>

## `> engineering_stack`

<div align="center">

<h3>Languages</h3>

<img src="https://skillicons.dev/icons?i=cpp,js,c,python&theme=dark"/>

<br/><br/>

<h3>Backend & Data</h3>

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,redis&theme=dark"/>

<br/><br/>

<h3>Frontend</h3>

<img src="https://skillicons.dev/icons?i=react,tailwind,vite&theme=dark"/>

<br/><br/>

<h3>Infrastructure & Tools</h3>

<img src="https://skillicons.dev/icons?i=docker,git,github,postman&theme=dark"/>

<br/><br/>

<img src="https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socketdotio&logoColor=white"/>
<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/REST_API-2563EB?style=flat-square"/>

</div>

<br/>

---

## `> flagship_project`

<div align="center">

# PREYTweet

### Full-Stack Social Media Platform

`React` · `Node.js` · `Express` · `MongoDB` · `Redis` · `Socket.IO` · `Docker`

<br/>

**A backend-focused social platform engineered around secure APIs,  
real-time communication, caching, and reliable data flows.**

<br/>

<a href="https://preytweet.netlify.app">
<img src="https://img.shields.io/badge/VIEW_LIVE-2563EB?style=for-the-badge&logo=netlify&logoColor=white"/>
</a>

<a href="https://github.com/PREPMND/ytweet">
<img src="https://img.shields.io/badge/EXPLORE_SOURCE-0F172A?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

<br/>

### `01 / SYSTEM DESIGN`

The application follows a **modular RESTful architecture**, separating routes, controllers, middleware, database models, and reusable API utilities.

```text
                         PREYTweet
                             │
              ┌──────────────┴──────────────┐
              │                             │
         REST API                      REAL-TIME
              │                             │
     Express + Middleware                 Socket.IO
              │                             │
    ┌─────────┼─────────┐          Conversation Rooms
    │         │         │                   │
   Auth     Redis    Rate Limit       Persistent Messages
    │         │         │                   │
    └─────────┴────┬────┘                   │
                   │                        │
                   └──────────┬─────────────┘
                              │
                           MongoDB
```

<br/>

### `02 / AUTHENTICATION`

```text
LOGIN
  │
  ├──► Access Token ─────► Protected API Requests
  │
  └──► Refresh Token ────► HTTP-only Cookie
                                  │
                                  ▼
                         Access Token Expired
                                  │
                                  ▼
                         Axios Interceptor
                                  │
                                  ▼
                         Refresh → Retry Request
```

- JWT-based access and refresh token authentication
- HTTP-only cookie storage for refresh tokens
- Middleware-driven protected routes
- Axios interceptor flow for expired authentication and failed-request retrying

<br/>

### `03 / REAL-TIME MESSAGING`

One-to-one messaging is built using **Socket.IO conversation rooms**.

```text
USER A ──────┐
             │
             ▼
      Participant Pair
             │
             ▼
    Conversation Identity
             │
             ▼
       Socket.IO Room
             │
       ┌─────┴─────┐
       ▼           ▼
    USER A       USER B
             │
             ▼
      MongoDB Persistence
```

Conversation identity is derived from the participant pair, allowing the same two users to resolve to a consistent conversation.

<br/>

### `04 / RELIABILITY & DATA`

| System | Engineering Role |
| :--- | :--- |
| **Redis** | Cache frequently requested application data |
| **Rate Limiting** | Control repeated API traffic |
| **MongoDB Aggregation** | Build channel profiles, subscriptions, and watch history |
| **Pagination** | Incrementally retrieve video data |
| **TanStack Query** | Cache and synchronize client-side server state |

<br/>

### `05 / MEDIA PIPELINE`

```text
CLIENT
  │
  ▼
Multer
  │
  ├──► Avatar
  ├──► Cover Image
  ├──► Video
  └──► Thumbnail
          │
          ▼
      Cloudinary
          │
          ▼
    MongoDB Metadata
```

Built media pipelines for user and video assets using **Multer and Cloudinary**.

<br/>

### `06 / INFRASTRUCTURE`

Backend services are containerized using **Docker** to standardize runtime environments and application dependencies.

```text
┌─────────────────────────────────────────┐
│             Docker Environment          │
│                                         │
│     Node / Express        Redis          │
│           │                 │            │
│           └────────┬────────┘            │
│                    │                     │
│                 MongoDB                  │
│                                         │
└─────────────────────────────────────────┘
```

<br/>

<div align="center">

### From REST APIs to real-time systems.

**PREYTweet is where I'm learning to think beyond features and reason about  
data flow, failure cases, state, and backend reliability.**

<br/>

<a href="https://preytweet.netlify.app">
<img src="https://img.shields.io/badge/OPEN_APPLICATION-2563EB?style=for-the-badge&logo=netlify&logoColor=white"/>
</a>

<a href="https://github.com/PREPMND/ytweet">
<img src="https://img.shields.io/badge/READ_THE_CODE-020617?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

<br/>

---

## `> another_build`

### PREPWatch — Movie Discovery Application

`React` · `TanStack Query` · `TMDB API` · `Tailwind CSS`

A responsive movie discovery application focused on **server-state management and efficient API consumption**.

- Integrated the TMDB REST API for movie and cast data
- Used TanStack Query for caching and background refetching
- Built movie search and persistent favourites
- Implemented dynamic routing, trailers, and cast discovery
- Structured reusable React components
- Achieved a **90+ Lighthouse performance score**

<div align="center">

<a href="https://prepwatch.netlify.app">
<img src="https://img.shields.io/badge/VIEW_LIVE-2563EB?style=for-the-badge&logo=netlify&logoColor=white"/>
</a>

<a href="https://github.com/PREPMND/pretanstack">
<img src="https://img.shields.io/badge/SOURCE_CODE-0F172A?style=for-the-badge&logo=github&logoColor=white"/>
</a>

</div>

<br/>

---

## `> problem_solving`

```cpp
struct CurrentProgress {
    std::string language = "C++";
    int leetcodeProblems = 180;

    std::vector<std::string> covered = {
        "Arrays",
        "Binary Search",
        "Recursion",
        "Stacks",
        "Queues",
        "Hashing"
    };

    std::string next = "Trees -> Graphs -> Dynamic Programming";
};
```

<div align="center">

### 180+ LeetCode problems solved in C++

`DSA` · `Complexity Analysis` · `Problem Solving`

</div>

<br/>

---

## `> current_focus`

```text
01. Deepening DSA and competitive programming
02. Building more reliable backend systems
03. Understanding caching beyond "just add Redis"
04. Designing APIs around failure cases and scale
05. Learning by shipping systems that force me to debug real problems
```

<br/>

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=PREPMND&bg_color=020617&color=60a5fa&line=2563eb&point=ffffff&area=true&hide_border=true" width="95%"/>

<br/><br/>

<sub>
I like projects that eventually make me ask:
<br/>
<b>"okay, but what happens when this fails?"</b>
</sub>

<br/><br/>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:020617,50:0f172a,100:2563eb"/>

</div>
