
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
> Note: By default, React uses port 3000 when running a development server. If port 3000 is already in use, the terminal then asks for permission to use the next available port.</small>

## 📸 Screenshots
💻 **Desktop:**

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

📱 **Mobile:**

<!-- Smartphone template from: https://www.freepik.com/free-vector/digital-device-mockup_4122505.htm#query=iphone&position=1&from_view=search&track=sph" on Freepik -->

<p align="center">
  <img alt="Home" src="https://lh3.googleusercontent.com/GAQwNj_QIwXzJfOUmJYbg7JhC324fq0Ybijc-QK8N-Na8BW2SfVuRA6w2FmsjlLq42Dhz5SnemM8d5fwlN0LB09GoijqcR35NocVEEbdOHIwKY_JB5fqH47NfreErJIECkIqLepFcLnncaYanrKJk0H9hUR-RFSIXHgZouN4yqeryOPb0txFDoyMcE66fpnwHbY_FTYVxfVBfw0_HK8sV20k_8ozZBvJohcXqpamSE_UL8cbe8zsrklkZSDBPWUMFW6Cc6RlD_evN-TdFBFThDGQf4j0OxYMHZXUZc3GEC8GwxecZntEzwWs14AkEpCzbDtN0otWhdExMWs_87vW8PZhB5NWYtK9qoEEcdP2S8bXVB2mqygyYnox-3IkmQ2GITU2MIk71raGDyxZ4WajooVKVfJnK1W6DWhXn0fSy8PoPjzzFhtUHLp4GUt2W5pEiZCGOhwiuighJLWr9Cgf_C6w9fUv3tsE6AemqPuPSAdK3faStRxFpEZEWzn_OoDB8K6Vf4tV2Yp4UT6g-bRujSMijyAt8uMQ1NIlMyBY6JJFCVW4DiTJzjibkntfLCWbVTYFfLDEwH32XHOmubPuZ-L7fM_fdOT9po7PbODPagsXpdMJ2k0P8oGyrWjxI6i3vfRhb1jUHDLk6MdcSQ5u8eEQbGWD-hAG7f7C-Zq2IUPeb16aiL2cd-UcB3WTCgNWleDyUvdaOm39hIC05ijfE0Na7twve5uhkWeinxYxDgEG9VUgUDiT75MvdOSwE6semoUfS-Nukwmjj8EP3s2Sdge2__weN1B7swpEmgrv82mEaQyfdmuUpRZpd9VW_XGQgQD0q4AIM-VoLPV7pJFzCSadVyhUUgKCMAWrXmx-TFNRAqEHfBI-8TAxHqs8KhQNeTt3aONp1M8noGq9IjFhNCx6QH1sT4ans5KwXGEuNjIQ0ns=w442-h877-no?authuser=0" width="30%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Question" src="https://lh3.googleusercontent.com/geZx_rLGGLCwAdg-UEyWfs7wVeE7mUxRw-pi5JxQQM_eRWIHSJX3KYyr8OO8MWOeVcS5XIp6x2535t987A-tcNzB6P1QfbDc3ACRedNGXHZhSagZHJPFkEV4po8ozInKZbNQu37TnFFLTx-D68jClBQx46K6w8mTF8i_ndUMHFoO3dWT8L4PClWBqoQjXeZpIBUj5Xp-_LUM4LeEJkM_OGABkIXAVX1lOVC3ZxyOgWgIL8bT7aZ-WOigIbV9bJlP963WfWPS9znZjKZc7vplZanNez9GpzXrhOGrpq4WHW2BEAXYxviKeNv3q5qKPR22Nftozhjx4eOealYYtUCu_a5vX0g9VZOPpv-MFAlSlOKJ67_i-OtO2fM61lY3iwm-mJ4Bke_DpS_BM4KVJFxPRGVO2HmljthrRB-WZyBTlVP61fi3TRSWeyxr2Uvl-DP82SdfiPfAl7PYdp7Jj7mC0sX6w64PzhQxfnTj2Mlvy1ZGRskH14rVuhp05B33ZwJd4UMCEluii9Ybi_aL-V2_SlDLA4Us93AqqUG_ANcvC0XBX1OYb-13cbT5Zdh2aqGJIp37ThmhAEnr0M7k84YMPPyPQJv2zGyBNGolQcWFMRybD_Cjo2l0aZZ1v-WrChWON07x9TqO0ptP7Z7GmCdcgi0m2fxF5jGvX2dQjBeaHrQMgRyRwWFbNVoAOtN_NK4U56aRa3QKYKLg9ARkhGMGlF9q5_D07349Vyy7G3j8UEDcEuipGDVEf_w5HyEkAyyGkXkJIdGx44clxZGYSZtHokfcXR7JazIFBDNcg6yGzElalbBfG0HMuqZrmrn0lksTPNdN4j0Xar42nZqFHWeSliqLe4RZ8GIkF7gy_EYfB41n2kjyD47L5fLoeXIZO6kH3MMY1uswJzy83KeCP8if7JaQvf3yAaOKU3BgPst1p9Qi9gY=w442-h877-no?authuser=0" width="30%">
</p>

<p align="center">
  <img alt="Correct" src="https://lh3.googleusercontent.com/Nba1YPvARqr_9yDiSNBlzaNNXwCebSZcy-FKRf6ah5YooCAf0jZ2nV0tZJ3uxOffMNc6dsgnAc_8PDKj9L_evPgrCNkOi60uVrsmqiSUJa-tzHMN9YlTUfvXaCeUJ3Nxq_GOJbeKdAAxTZ5o2DjCivHdb2g9R2_ugd9FqmbA6QEJceCDoPN6Nu44GfA4248cz4jP6vA0mdLSXFq-MI6oj-Vf0ETQ35LOox2ATD-GtFJEdUm_vziLI-7afaqOiVZ4lzvJ8M3FWLUA1-I4yC5Z0BZoeOJpIDwvHdBGe85btRyU-UTet4-cpS_3T2XU5BGScD5Hr6ezhMDBya7gp2ngQIJdzBBoYcruTex4k0vS3jFHboAqmpPJOYLsV8M3bNOvBpHVLLq72upYx_ZLrJ-jUsPDFg5td0yvFKW7eApDVqoAUSWXTRrlVLpB8G-1dAtavOwju6_IzlNQqaKdx4zpxn4af1I84IC_tW6zdR8sYI87RLzaFmabn3VoL71LR2HcIlGkTeb7OAoJTWRKPSx18QBNPQSMVfNxNNVXvGL4HKYowUi7khjOWjIdkTFkNcStDYEqhBulzZcGVcmSymgahST2XaFFqgOb7daJ-cow9eAfD1kMFii4J-xdV6UlsPu4iFzUDd5mj-GmBWnzG2WAv2PTX-lvXf3NezpvAU7UhQ2JQd2gQ_QeY0wH2FXzwWfLJL1FNGpl8NHAvIw3nmKh9upktbULr0Wh8N84MapEASfJpHgCw_whTnVXgs-ni_GPG3RpdlXpv6Ce9F8fNZmfZMQ4HTU4d2mNNSTE-CJ9cp0mbIgBEvVdvjle3v-wQoUayLxAJ86Z5TvPQvCf1ykXNtx1kYXzCt15GsULOUGW-gHj4GDnJm3EwW56wbB4dztBd3hbeym_hQ6DQ4awoCNyCPKdLu80kzo5fN84dqMDBjB7CDw=w442-h877-no?authuser=0" width="30%">
&nbsp; &nbsp; &nbsp; 
  <img alt="Wrong" src="https://lh3.googleusercontent.com/7HCRm0KfuCygMldFEk46eWBvLGK_kdLEWzY-PCUyfSvsgr0ZGNe3xsYXiMnLMjsQwJhrbEcdrfl2W1YFFM9WY52JziYptF4QphEQk-ux6g_zYDAPSFzECZkf95_Yp3XTSedcZiNk9ghtZw3BPxFqBKYJ9FJdH9YK_DpYt0a2E_uQtf_xT_HxuusBS44rVAdOSoPnhJv7Rd8izGZp-swRthHxZC5q8iH6wk53D3cwn2R7XMmsUCSUbOIovxd5UfyJRUXNYOTPxmOFPLFzPgWqR2kUECYi-iBcC-QYhz3BN2Tb1c7eEz99lIBa4_x0FwXy4HHXijsuE8mFF03hKFU3MTWkWr6d9oFEli4_JTRURNT4kKWrW_KFQLfMQGZpm86rI73NxELDArRC0_u314uR2BDu5MeBuxJ6rWBlv5S9GlXdQncALKF0oJThP9RA_OGHNSovnucmHU87qFqS43zXeXcIhDK8LbCp5_ApjoOijjgFg3Z77_m5KpesYRt9hmZLXXS4ZVts4yi42-hutOxRloa6O-tUfkLnVZtoMqfkFqmTfK2OE4p8hqDni1qeqAzDVCEHHxbgj0PD60XOXFq15IcI-ubazPcs2Wm4_4XNJQpz5jg6KpNugwm5ocMJ_txfgm0aLVtIjPGeNvMyfv290_FJFCmwG_q3-CoCsSgh5FSPmLaUYrlbLRuNev8bzR157gmLNLFQu_uWSEl2fal1-HQuB6IWQSGMlrmYv3H76Eih5e0X2wYzJwL07vPeH-wDeyC7sX9m_cgDwKMFgKBFJxrllL21R8X5sgLZYxeHu-lSEpvB0SCh2Kgc4qzPjM7gKOgs8PATS-k8oo8ZEv9bNnNxy51OoGi5MG9-dYSq0FJdRRcWzJAwabkWYK_N5QtCwFpBYSKJAv7RoG3Wjd6VFYxZ8fqjx7B-8gaSPkH3dMAtu5g=w442-h877-no?authuser=0" width="30%">
  &nbsp; &nbsp; &nbsp; 
  <img alt="Score" src="https://lh3.googleusercontent.com/xZHkbPgy1SWAnUpPVpVfsGqtKlMN5aMNDa1ZSqrPVumuCmzVQMvH1A0EkMFKQVbUKMU9X08YGzmpYabBn_jAOkD11vTU3pMoLMMT3Sy_WDj-dRkaNQEagO_b1o6XI9p16GZCDOO3y-GlKthtRGP8QKAMYGTqm80DFvGBbXIp9c0OmjY3NnyG9IzuSfat2Vie-N7-jycSpr1L0BaccpPeHdJVYXrHT5sKutTeXFZ1o7ouT17uO-iMs0ZBQ2x9AXlyGn4ajabL0VOpEktCkF_6kaP0BH9MAgScSmlz33oW4WcOD6l3t4vycDgQ9WMNskjAtVq0utiMUtgpSJjbQNLQls7SjKUvG4Ryj6KdGDO43hwM1mmO_x3yXjnLzxd-tIxTPWODBiyGLdJPxz1Hm5e5GPvUSnU7XL8K5J3SA_m6f-FhDYMIejGElsyZKPK_kWxuNhyY3aVPwon-i8IFuC_Fw1azdDtN9QL_HCd91JIdFWI_CCoTgMV55hucK5pdbTeZ431IlSmTuzczldkLnwsOhqCMr2pzv0oAgbL2HH70mO1-RFMa_Chtg3ah6SniH9WrtPOkX15z4OgcbMEn63lMVzIUgw1coSEa9pS7Ijta35CMzzC37hRoX447c38FxJAM0GJZzddz0lMiUk_odXNdkan0-_2gsasKPuYzW6lC0zW5Zpj7zIyvsI942spLudPSe3LUh7NOu2IXsmfZQ8NtyYOuCuyDssSdPUOx1HEzhOBLsCuO2PNVzX0MnyKtM6O5jcJQ9pr4QeeNxmYk0_4ENeqanELTAz6FG8JtmHYDqsUkX2RphTI3pib9NYteUA_0FJmUsBW0y7w2lT1nIKCCmMA59XGo_BYhRxoBXUIQaItGz3F97cUOgRKEV9O8WRuU4btZaNdi5M-1AiZnmxUpGd2HjKvJf7Vwy4oL3yf4Mxiy2Kk=w442-h877-no?authuser=0" width="30%">
</p>
