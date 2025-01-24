// document.addEventListener("DOMContentLoaded", () => {
//     //const skillsInput = document.getElementById("skillsInput");
//     const saveButton = document.getElementById("saveSkills");
  
//     // Load saved skills
//     // chrome.storage.local.get("recentSkills", (data) => {
//     //   skillsInput.value = data.recentSkills || "";
//     // });
  
//     // Save updated skills
//     saveButton.addEventListener("click", () => {
//       const updatedSkills = skillsInput.value;
//       chrome.storage.local.set({ recentSkills: updatedSkills }, () => {
//         alert("Skills updated successfully!");
//       });
//     });
//   });

document.getElementById("fetch-skills").addEventListener("click", () => {
  console.log("clicked");
  //chrome.tabs.create({ url: "http://localhost:3000" });
});