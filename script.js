// ================================
// تاریخ امروز
// ================================

const dateElement = document.getElementById("today-date");

const today = new Date();

const persianDate = new Intl.DateTimeFormat(
    "fa-IR",
    {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
).format(today);

dateElement.textContent = persianDate;


// ================================
// جمله‌های روز
// ================================

const quotes = [
    "راه‌های بزرگ با قدم‌های کوچک آغاز می‌شوند.",
    "آنچه امروز می‌آموزی، سرمایه‌ی فردای توست.",
    "آرام پیش برو، اما دست از رفتن برندار.",
    "هر روز چیزی بساز که دیروز وجود نداشت.",
    "دانش، راهی است که هرچه بیشتر بروی، افق‌های بیشتری می‌بینی.",
    "هیچ بنایی یک‌شبه ساخته نمی‌شود.",
    "امروز همان جایی است که آینده از آن آغاز می‌شود.",
    "برای ساختن زندگی دلخواهت، باید خودت معمار آن باشی."
];


// انتخاب بر اساس روز سال
const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) /
    (1000 * 60 * 60 * 24)
);

function getQuote(offset) {
    return quotes[(dayOfYear + offset) % quotes.length];
}

document.getElementById("quote-one").textContent = getQuote(0);
document.getElementById("quote-two").textContent = getQuote(1);
document.getElementById("quote-three").textContent = getQuote(2);