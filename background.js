// console.log("Background script is running!");
// if (chrome.runtime && chrome.runtime.id) {
//   console.log(chrome.runtime.id); // Access safely
// } else {
//   console.error("chrome.runtime is not defined");
// }
//Set an alarm when the extension is installed

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.alarms.create("monthlySkillCheck", { periodInMinutes: 1 }); // 30 days
// });

// // Triggered when the alarm fires
// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === "monthlySkillCheck") {
//     sendSkillPrompt();
//   }
// });
// sendSkillPrompt()
// // Function to send a skill prompt to the backend
// function sendSkillPrompt() {
//   console.log('skills');
//   fetch("http://localhost:5000/analyze", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt: "Extract skills from the following text: Python, Data Analysis, Machine Learning" })
//   }).then((response) => response.json())
//     .then((data) => {
//       const skills = data.skills.join(", ");
//       chrome.storage.local.set({ recentSkills: skills });
//       showNotification(skills);
      
//     })
//     .catch((error) => console.error("Error:", error));
// }

// Show a notification with the detected skills
function showNotification(skills) {
  chrome.notifications.create("skills-notification", {
    type: "basic",
    iconUrl: "assets/icon.png",
    title: "Skills Detected",
    message: `Recent skills: ${skills}`,
    buttons: [
      { title: "Open Skillpro" },
    ]
  });

  chrome.notifications.onButtonClicked.addListener((notifId, btnIdx) => {
    if (notifId === "skills-notification" && btnIdx === 0) {
      console.log("i am here")
      // Open the React app in a new tab
      chrome.tabs.create({ url: "http://localhost:3000" });
    }
  });
 }

const channelId = "C089Q857JEM"; // Replace with your Slack channel ID
const user_id = "U089BGXR9DY";

fetch("http://localhost:5000/slack/extract-skills", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ channel_id: channelId, user_id: user_id })
})
  .then(response => response.json())
  .then(data => {
    console.log("Extracted Skills:", data.skills);
    showNotification(data.skills);
  })
  .catch(error => {
    console.error("Error:", error);
  });



