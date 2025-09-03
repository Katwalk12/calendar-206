// Select all holiday buttons
const holidays = document.querySelectorAll(".holiday");

// Create popup container
const popup = document.createElement("div");
  popup.id = "popup";
  popup.style.display = "none";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#222";
  popup.style.color = "#fff";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
  popup.style.zIndex = "1000";
  popup.style.maxWidth = "300px";
  popup.style.textAlign = "center";
//image size in popup
const style = document.createElement("style");
style.innerHTML = `
  #popup img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,0.4);
  }
`;
document.head.appendChild(style);

// Close button
const closeBtn = document.createElement("button");
  closeBtn.innerText = "Close" ;
  closeBtn.style.marginTop = "2 0px";
  closeBtn.style.padding = "5px 20px 10px 20px";
  closeBtn.style.cursor = "pointer";
  closeBtn.onclick = () => (popup.style.display = "none");
  popup.appendChild(closeBtn);
  document.body.appendChild(popup);

// Holiday descriptions (customize these)
const holidayInfo = {
  NewYear: "<h1 style=color:red;>New Year’s Day </h1><img src=images/newyear.jpg> <br> The New Year is the time or day at which a new calendar year begins and the calendar's year count increments by one. Many cultures celebrate the event in some manner.",
  chineseNewYear: "<h1 style=color:red;>Chinese New Year</h1><img src=images/chineseNewYear.png> <br> is a festival that marks the beginning of a new year on the traditional lunisolar Chinese calendar. It is one of the most important holidays in Chinese culture. <br>",
  fitr: "<h1 style=color:red;>Eid'l Fitr </h1> <img src=images/eid'al.jpg> <br> festival of breaking the fast, is a joyous Islamic holiday that marks the end of Ramadan, the sacred month of fasting. It is a celebration of spiritual renewal and gratitude for the strength to endure fasting, and involves special prayers, charity, festive meals, and gatherings with family and friends. <br>",
  Kagitingan: "<h1 style=color:red;>Araw ng Kagitingan</h1><img src=images/kagitingan.jpg> <br> The day is officially celebrated every April 9, the start of the Bataan Death March, although the date was moved on several occasions to avoid it from coinciding with the observance of the Holy Week in the country, especially the Easter Triduum and Easter Sunday, such as in 2004, 2009, 2020, and 2023 <br>",
  maundy: "<h1 style=color:red>Maundy Thursday</h1> <img src=images/maundy.png alt=maundy> <br> Christian holy day on the Thursday before Easter that commemorates the Last Supper of Jesus Christ with his disciples and the institution of the Eucharist. <br> ",
  goodFriday: "<h1 style=color:red;> Good Friday</h1> <img src=images/goodFriday.jpg> <br> the Christian holy day, occurring the Friday before Easter, that commemorates the crucifixion of Jesus Christ and his subsequent death <br>",
  blackSaturday: "<h1 style=color:red;>Black Saturday</h1> <img src=images/blackSaturday.jpeg> <br> a Christian day of mourning, silence, and waiting, marking the time between Jesus Christ's crucifixion on Good Friday and his resurrection on Easter Sunday<br>",
  Labor: "<h1 style=color:red;> Labor Day </h1><img src=images/laborDay.png> <br> a public holiday that celebrates and recognizes the social and economic achievements of workers.",
  adha: "<h1 style=color:red;>Eidul Adha</h1> <img src=images/EidAdha2.png> <br> a major Islamic holiday that commemorates Prophet Abraham's (Ibrahim) willingness to sacrifice his son in obedience to God's command <br>",
  independence: "<h1 style=color:red;> Independence Day </h1><img src=images/independence.png> <br> a condition of a nation, country, or state, in which residents and population, or some portion thereof, exercise self-government, and usually sovereignty, over its territory <br>",
  ninoy: "<h1 style=color:red;>Ninoy Aquino Day</h1> <img src=images/aquino.jpg><br> is a national, special non-working holiday in the Philippines observed every August 21 to commemorate the death anniversary of former Senator Benigno Ninoy S. Aquino, Jr. Aquino,<br>",
  national: "<h1 style=color:red;> National Heroes Day </h1><img src=images/heroes.jpg> <br>commemorates the bravery and sacrifices of all national heroes, known and unknown, who have contributed to their nation's freedom and progress<br>",
  allSaints: "<h1 style=color:red;>All Saints' Day</h1><img src=images/allSaints.png><br> a Christian holy day on November 1st commemorating all saints—both known and unknown—who have attained heaven. Celebrated by Catholic, Anglican, and Protestant churches in the West, and on the first Sunday after Pentecost in Eastern Orthodox churches, <br>",
  bonifacio: "<h1 style=color:red;>Bonifacio Day</h1> <img src=images/bonifacio.jpg> <br> a national holiday in the Philippines celebrated on November 30 in honor of Andrés Bonifacio, a Filipino revolutionary leader and the founder of the Katipunan, which sought independence from Spanish colonial rule. <br>",
  christmas: "<h1 style=color:red;>Christmas Day </h1> <img src=images/christmas.jpg> <br>  an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. <br>",
  rizal: "<h1 style=color:red;>Rizal Day </h1> <img src=images/rizal.jpg> <br> a Philippine national holiday commemorating the life and works of José Rizal, a national hero who played a key role in the country's fight for independence from Spanish colonial rule. <br>",
};

// Add event listeners
holidays.forEach(button => {
  button.addEventListener("click", () => {
    const holidayName = holidayInfo[button.id] || "Holiday";
    popup.innerHTML = `<h2>${holidayName}</h2>`;
    popup.appendChild(closeBtn);
    popup.style.display = "block";
  });
});
// list sound effect when clicking 
const newYearBtn = document.getElementById("NewYear");
newYearBtn.addEventListener("click", () => {
  const audio = new Audio("audio/newYear.mp3");
  audio.play();
//stop audio when close
closeBtn.addEventListener("click", () => {
  if (audio) {
    audio.pause();      
    audio.currentTime = 0;
  }
}); 
});
const christmasBtn = document.getElementById("christmas");
christmasBtn.addEventListener("click", () => {
  const audio = new Audio("audio/christmashoho.mp3");
  audio.play();
closeBtn.addEventListener("click", () => {
    if (audio) {
      audio.pause();      // stop playback
      audio.currentTime = 0; // reset to beginning
    }
  });
});
const allSaintsBtn = document.getElementById("allSaints");
allSaintsBtn.addEventListener("click", () => {
  const audio = new Audio("audio/nov1.mp3");
  audio.play();
closeBtn.addEventListener("click", () => {
    if (audio) {
      audio.pause();      // stop playback
      audio.currentTime = 0; // reset to beginning
    }
  });
});