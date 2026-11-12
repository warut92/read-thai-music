// -------- STYLES --------
const style = document.createElement("style");
style.textContent = `
  #linkBox {
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: yellow;
    padding: 10px;
    border: 1px solid blue;
    display: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  #toggleBtn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
  }
  #soundBtn {
    position: absolute;
    top: 10px;
    right: 60px;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
  }
  #linkBox a {
    display: block;
    margin: 5px 0;
    color: #007BFF;
    text-decoration: none;
  }
  #linkBox a:hover {
    text-decoration: underline;
  }
`;
document.head.appendChild(style);

// -------- TOGGLE BUTTON --------
const toggleBtn = document.createElement("button");
toggleBtn.id = "toggleBtn";
toggleBtn.textContent = "🍎";
document.body.appendChild(toggleBtn);

// -------- SOUND BUTTON (เฉพาะหน้าที่มีเสียง เช่น 4bars.html) --------
const pageSound = window["Sound"];
if (pageSound) {
  const soundBtn = document.createElement("button");
  soundBtn.id = "soundBtn";
  soundBtn.title = "เปิด/ปิดเสียง";
  const renderSoundBtn = () => { soundBtn.textContent = pageSound.muted ? "🔇" : "🔊"; };
  soundBtn.addEventListener("click", () => { pageSound.toggle(); renderSoundBtn(); });
  renderSoundBtn();
  document.body.appendChild(soundBtn);
}

// -------- LINK BOX DIV --------
const linkBox = document.createElement("div");
linkBox.id = "linkBox";
document.body.appendChild(linkBox);

// -------- LINKS DATA --------
const links = [
  { text: "หน้าหลัก", url: "./index.html" },
  { text: "แบบที่ 1 /---x/", url: "./4bars.html?p=p1" },
  { text: "แบบที่ 2 /---x/----/", url: "./4bars.html?p=p2" },
  { text: "แบบที่ 3 /-x-x/", url: "./4bars.html?p=p3" },
  { text: "แบบที่ 4 /-xxx/", url: "./4bars.html?p=p4" },
  { text: "แบบที่ 5 /-x-x/---x/", url: "./4bars.html?p=p5" },
  { text: "แบบที่ 6 /---x/----/-x-x/", url: "./4bars.html?p=p6" },
  { text: "สุ่มแบบปรับแต่งเอง", url: "./4bars.html" },
  { text: "แต่งโน้ตเอง", url: "./4bars-custom.html" },
  { text: "เพลงเต้ยโขง", url: "./toey-khong.html" }

];

// -------- CREATE LINKS --------
links.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.text;
  a.target = "";
  linkBox.appendChild(a);
});

// -------- TOGGLE FUNCTION --------
toggleBtn.addEventListener("click", () => {
  const isVisible = linkBox.style.display === "block";
  linkBox.style.display = isVisible ? "none" : "block";
});