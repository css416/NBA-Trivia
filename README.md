
# NBA Guess Who?

NBA Guess Who? is a web application where users can test their knowledge about the NBA's current active players. There are a total of ten (10) questions, and each question has four (4) options. Every question contains a picture of a random active NBA player, and the user should choose the correct name in order to gain a point. The total score is shown at the end of the quiz after answering all questions.

All NBA player's information are retrieved from the [NBA API](https://data.nba.net/data/10s/prod/v1/2022/players.json).

<p align="center">
<!-- Template from: https://www.vecteezy.com/free-vector/browser Browser Vectors by Vecteezy</a> -->
    <img alt="NBA Guess Who?" title="Home-Page" src="https://lh3.googleusercontent.com/pw/AL9nZEWwuOhncl0oXTZzjmlCBNWOSc0OmLrsFgSNvYJxdbz2zwJlZTyFlykobkli91PDr3smozSAe7FYywzPxJsFw-xnSSKSA5vB_tGn6-dQk2jIw7FLmQGtrMkhrJ37yRLgxhoYH_8QbA2ZqZff1pvx58w=w1249-h875-no?authuser=0" width="450">
</p>

## ✨ Links: 
+ [Live Preview](https://nba-quiz-be2ed.web.app/)

## ⚡️ Quick Start

Options:

- [Download from Github](https://github.com/css416/NBA-Trivia.git).
- Clone the repository: `git clone https://github.com/css416/NBA-Trivia.git`.
  
## 🚀 Usage

Make sure you have [Node.js](https://nodejs.org/en/) installed.

1 - Install all the dependencies:

```sh
npm install
```

2 - Start the server using the command:
```sh
npm start
```

3 - Access the web application:
```sh
http://localhost:3000/ 
```
> Note: By default, React uses port 3000 when running a development server. If port 3000 is already in use, the terminal then asks for permission to use the next available port.

## 📸 Screenshots
#### 💻 Desktop:

<p align="center">
  <img alt="Light" src="https://lh3.googleusercontent.com/pw/AL9nZEVKhkOJyEayCFsuTXXWGg65ieiMo6OUVsDi4K9dxiX-1TuimNsGwV1dLC3WBVyHLfcZdVpe0NLnbTk3cJcn-FhiPBvj-cePhlWzhPjkFusTvdfUhssmWs55vG22CdbWm9lxPbKpOQIHLfwEvuRg4fA=w1000-h667-no?authuser=0" width="45%">
&nbsp; &nbsp; &nbsp; 
  <img alt="Dark" src="https://lh3.googleusercontent.com/pw/AL9nZEUH4n7aFk5RwyiFTMH5q3cn7zK597yegEm_pbW3haCuVQsl3HhiWLurOUccWdw14cMYQcsuT09lAD-VYXpx7MyOSajKDcTQxavDA73B8-M3-SkRy0xELgcuHvDjh-kVgh7iLs8iTQ6Lv5JRrYKqdp8=w1000-h667-no?authuser=0" width="45%">
</p>

<p align="center">
  <img alt="Light" src="https://lh3.googleusercontent.com/pw/AL9nZEV26viyx0ATX_MH2pj-Mu3udJowiZbb7zywEWucP9DnqPDtozoegl0fkbQ2FnLO3-fmSJnp_Q2rWm4k0KGbppZrz13L84bqXDr62Vw2i2tcZsT34Lckw9VtKgfGTz3F13vSccYeN2o-BKfeOHjfbVk=w1000-h667-no?authuser=0" width="45%">
&nbsp; &nbsp; &nbsp; 
  <img alt="Dark" src="https://lh3.googleusercontent.com/pw/AL9nZEWdiyyhxFMkm1KXLDutdKewP31wmDl9BFAkQW3tSqaiw_nM6Kd_V-jWW2qCNDrA0zfix1R9DtkTtNRMEZRBuhY01SpZdUoKYCm3Vx1kxZOHc16j5_0UoL3pNRD2tr1FqR55h_xW7NI_6XstkYxvpP8=w1000-h667-no?authuser=0" width="45%">
</p>

#### 📱 Mobile:

<!-- Smartphone template from: https://www.freepik.com/free-vector/digital-device-mockup_4122505.htm#query=iphone&position=1&from_view=search&track=sph" on Freepik -->

<p align="center">
  <img alt="Home" src="https://lh3.googleusercontent.com/pw/AL9nZEV6iT7JoyfbsaRij0-hiBt0iVO0g41ccvMG3J37oiEdC_5ubOfSRKUKuZ5ja-za0qSmPA772saQfZ7Oj2Ik-7auXMEu_Zcv8lapVmKNANPGHTqwonIMm_KFDMat3bD9qbVvrU_q2awpGi9GAmq02b7Y=w474-h941-no?authuser=0" width="30%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Question" src="https://lh3.googleusercontent.com/pw/AL9nZEXO3tHWVCidhk0j6m16IZNrUuMraeMuYysRTf9CFmzgqgWri0minOM2LiOswGYqrL-dL3vYX5e9z9H74eQrtXrT1dihWtMtR-oBNPhBGCjwHSgMau3solpq1yKhfusMjZ8XOcmUhovljJwPBQdI8gVB=w474-h941-no?authuser=0" width="30%">
</p>

<p align="center">
  <img alt="Correct" src="https://lh3.googleusercontent.com/pw/AL9nZEXWDiQgdb-g2qExKn-SZjlxTq7P1EDeIRQ48c-OqJdVERrCJvM4Cfr7LwO08147SOGg0gP6aZWt101JjkVielNQx7aXtp3SeHxLRQpMKuZdpV_jmja3SwpdnCwNhH9y7D3t6QHnbfWxOaXTbbxLDXc6=w474-h941-no?authuser=0" width="30%">
&nbsp; &nbsp; &nbsp; 
  <img alt="Wrong" src="https://lh3.googleusercontent.com/pw/AL9nZEXuiJZnPlsJns5e9uHG2A7KeJs8IvF4Ffgcz11P1NyH7HQhj1dDB6z52ZRn24ztp2hIKaLmGv5V-jFkwa1dvo2XJN1ThDe46sd-ZDltUOExMdyEEmTeCNchRcwu22QfqBY4KVTTObFKywP-Z578MNPZ=w474-h941-no?authuser=0" width="30%">
  &nbsp; &nbsp; &nbsp; 
  <img alt="Score" src="https://lh3.googleusercontent.com/pw/AL9nZEUXM1u7owqavJst8twdAnJYf2A_mDz3oM1GeqdD7VF4RiQ7KI9OZg1_GFvOapqkDfMd8zlhZquJJ6BH2gGR7qLmaGqM_HFgaEkHZo60a7gXyMgi-3VYv-IG5wZT6gU1_dkB3ZSVyW5byAZcz-I4N2nj=w474-h941-no?authuser=0" width="30%">
</p>
