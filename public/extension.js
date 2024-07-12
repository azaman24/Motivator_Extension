//Obtaining and Declaring all 3 styles of buttons
const religionBtns = document.getElementsByClassName("religion");
const sportsBtns = document.getElementsByClassName("sports");
const persBtns = document.getElementsByClassName("personalities");


const localStorageKeys = ["gita", "bible", "quran", "soccer", "basketball", "cricket", "wwe", "entreprenurial", "celebrities", "fitness", "philosophers", "academics", "historians", "artists"];
const localStorageVals = [];
for(let i = 0; i<14; i++){
    localStorageVals[i] = true;
}
//Initializing local Storage Keys and Vals arrays above ^


if(localStorage.getItem("gita") != null){
    for(let i =0; i<14; i++){
        localStorageVals[i] = JSON.parse(localStorage.getItem(localStorageKeys[i]));
    }

    verifyClasses();
}
//Obtaining the current state of all buttons if they are saved to local storage

//verify classes function. It scrolls through the array checking all buttons. If the button and array don't match, the BUTTON will change to match the array
function verifyClasses(){
    for(let i =0; i<14; i++){
        if(localStorageVals[i] && (document.getElementById(localStorageKeys[i]).classList.contains("relUns"))){
            document.getElementById(localStorageKeys[i]).classList.toggle("relUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("religionSelect");

        } else if (localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("sportsUns")){
            document.getElementById(localStorageKeys[i]).classList.toggle("sportsUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("sportsSelect");

        } else if(localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("persUns")){
            document.getElementById(localStorageKeys[i]).classList.toggle("persUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("persSelect");
        }

        else if(!localStorageVals[i] && (document.getElementById(localStorageKeys[i]).classList.contains("religionSelect"))){
            document.getElementById(localStorageKeys[i]).classList.toggle("relUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("religionSelect");

        } else if (!localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("sportsSelect")){
            document.getElementById(localStorageKeys[i]).classList.toggle("sportsUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("sportsSelect");
            
        } else if(!localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("persSelect")){
            document.getElementById(localStorageKeys[i]).classList.toggle("persUns");
            document.getElementById(localStorageKeys[i]).classList.toggle("persSelect");
        }
    }
}

//Save button obtained
const saveBtn = document.getElementById("save_btn");

//verify arrays function, if array and buttons are different, ARRAY will be adjusted
function verifyArrays(){
    for(let i =0; i<14; i++){
        if(localStorageVals[i] && (document.getElementById(localStorageKeys[i]).classList.contains("relUns"))){
            localStorageVals[i] = false;

        } else if (localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("sportsUns")){
            localStorageVals[i] = false;

        } else if(localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("persUns")){
            localStorageVals[i] = false;
        }

        else if(!localStorageVals[i] && (document.getElementById(localStorageKeys[i]).classList.contains("religionSelect"))){
            localStorageVals[i] = true;

        } else if (!localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("sportsSelect")){
            localStorageVals[i] = true;
            
        } else if(!localStorageVals[i] && document.getElementById(localStorageKeys[i]).classList.contains("persSelect")){
            localStorageVals[i] = true;
        }
    }
}

//Save button event listener, verifies arrays correctness and saves to local storage
saveBtn.addEventListener("click", function(){
    verifyArrays();
    for(let i=0; i<14; i++){
        localStorage.setItem(localStorageKeys[i], JSON.stringify(localStorageVals[i]));
    }
    document.getElementById('save_btn').textContent = 'Quotes Saved!';
    var button = document.getElementById('save_btn');
    button.style.backgroundColor = '#303030';
})

//Adding event handlers to the religion buttons
for (const button of religionBtns){
    button.addEventListener("click", function(){
        button.classList.toggle("religionSelect");
        button.classList.toggle("relUns");
    })
}

//Adding event handlers to sports buttons
for (const button of sportsBtns){
        button.addEventListener("click", function(){
        button.classList.toggle("sportsSelect");
        button.classList.toggle("sportsUns");
    })
}

//Adding event handlers to personalities buttons
for (const button of persBtns){
    button.addEventListener("click", function(){
        button.classList.toggle("persSelect");
        button.classList.toggle("persUns");
    })
}