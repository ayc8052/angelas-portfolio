
const d = new Date();
let day = d.getDay();
let hour = d.getHours();


function dayOrNight() {
    if (hour >= 18 || hour < 6) {
        document.body.style.backgroundColor = "#ccbca3";
    }
}


function updateDay() {
    day++; 
    if (day > 6) {
        day = 0;
    }

    const footerElements = document.querySelectorAll('footer');
    footerElements.forEach(function(footer) {
        switch (day) {
            case 0:
                footer.textContent = "Saturday's quote: 'Sand is overrated. It's just tiny, little rocks.'";
                break;
            case 1:
                footer.textContent = "Sunday's quote: 'Blessed are the forgetful, for they get the better even of their blunders.'";
                break;
            case 2:
                footer.textContent = "Monday's quote: 'You can erase someone from your mind. Getting them out of your heart is another story.'";
                break;
            case 3:
                footer.textContent = "Tuesday's quote: 'I don’t need nice. I don’t need myself to be it, and I don’t need anybody else to be it at me.'";
                break;
            case 4:
                footer.textContent = "Wednesday's quote: 'Are we like those bored couples you feel sorry for in restaurants?'";
                break;
            case 5:
                footer.textContent = "Thursday's quote: 'Valentine’s Day is a holiday invented by greeting card companies to make people feel like crap.'";
                break;
            case 6:
                footer.textContent = "Friday's quote: 'We met at the wrong time. That’s what I keep telling myself anyway. Maybe one day years from now, we’ll meet in a coffee shop in a faraway city somewhere and we could give it another shot.'";
                break;
            default:
                console.log("Invalid day");
        }
        // footer.style.fontFamily = "Quicksand";
    });
}

dayOrNight();
updateDay();
