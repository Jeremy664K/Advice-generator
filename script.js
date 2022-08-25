const $ = selector => document.querySelector(selector);

const $card = $(".card");
const $spinner = $(".spinner")
const $adviceID = $("#advice_id");
const $adviceMessage = $("#advice_message");

$(".card_more").addEventListener("click", getAdvice);

async function getAdvice() {
    $card.style.display = "none";
    $spinner.style.display = "block";

    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();

    const { advice, id } = slip;

    $adviceID.textContent = `ADVICE #${id}`;
    $adviceMessage.textContent = `"${advice}"`;

    $spinner.style.display = "none";
    $card.style.display = "block";
}

getAdvice();

$(".card_expand").addEventListener("click", expandAdvice);

function expandAdvice () {
    $card.classList.toggle("card_expand-true")
}