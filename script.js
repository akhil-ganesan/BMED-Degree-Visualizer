// Include the JavaScript logic for courseVisualizer function here
const BMEprereqChain = {
    "APPH 1040/1050/1060": [],
    "BMED 1000": [],
    "BMED 2110": ["CHEM 1211K", "MATH 1552", "BMED 1000"],
    "BMED 2250": ["BMED 2110"],
    "BMED 2310": ["BMED 2110", "BMED 2250", "PHYS 2211"],
    "BMED 2400/ISyE 3770/CEE 3770": ["MATH 1552", "CS 1371/CS 1301"],  
    "BMED 3100": ["CHEM 1315"],
    "BMED 3110": ["BMED 3100", "BMED 2400/ISyE 3770/CEE 3770", "BMED 3410", "CS 1371/CS 1301"],
    "BMED 3310": ["BMED 2110", "MATH 2551", "MATH 2552", "CS 1371/CS 1301", "PHYS 2211"],
    "BMED 3410": ["COE 2001", "MATH 2551"],
    "BMED 3520": ["BMED 3100", "BMED 2110", "MATH 2552", "CS 1371/CS 1301"],
    "BMED 3600": ["BMED 3100"],
    "BMED 3610": ["BMED 2310", "BMED 2400/ISyE 3770/CEE 3770", "BMED 3600"],
    "BMED 4000": ["BMED 1000", "BMED 2310"],
    "BMED 4602": ["BMED 2310", "BMED 3110"],

    "CHEM 1211K": [],
    "CHEM 1315": ["CHEM 1211K"],
    "COE 2001": ["MATH 1552", "PHYS 2211"],
    "CS 1371/CS 1301": [],
    "ECE 3710": ["PHYS 2212"],
    "ECE 3741": ["ECE 3710"], 

    "Elective (Breadth) 1": [],
    "Elective (Breadth) 2": [], 
    "Elective (Breadth) 3": [], 
    "Elective (Breadth) 4": [], 
    "Elective (Breadth) 5": [],

    "Elective (Depth) 1": [],
    "Elective (Depth) 2": [],
    "Elective (Depth) 3": [],


    "ENGL 1101": [], 
    "ENGL 1102": ["ENGL 1101"],

    "Humanities 1": [],
    "Humanities 2": [],

    "MATH 1551": [],
    "MATH 1552": ["MATH 1551"],
    "MATH 1553": ["MATH 1551"],
    "MATH 2551": ["MATH 1552", "MATH 1553"],
    "MATH 2552": ["MATH 1552", "MATH 1553"],
    "MSE 2001": ["CHEM 1211K"],
    "PHYS 2211": ["MATH 1552"],
    "PHYS 2212": ["PHYS 2211"],
    
    "Social Sciences 1": [],
    "Social Sciences 2": [],
    "Social Sciences 3": [],
    "U.S. Social Science": []
}; // Your prereq_chain JavaScript object here


const healthprereqChain = {
    "APPH 1040/1050/1060": [],
    "BMED 1000": [],
    "BMED 2110": ["CHEM 1211K", "MATH 1552", "BMED 1000"],
    "BMED 2250": ["BMED 2110"],
    "BMED 2310": ["BMED 2110", "BMED 2250", "PHYS 2211"],
    "BMED 2400/ISyE 3770/CEE 3770": ["MATH 1552", "CS 1371/CS 1301"],  
    "BMED 3100": ["CHEM 2311"],
    "BMED 3110": ["BMED 3100", "BMED 2400/ISyE 3770/CEE 3770", "BMED 3410", "CS 1371/CS 1301"],
    "BMED 3310": ["BMED 2110", "MATH 2551", "MATH 2552", "CS 1371/CS 1301", "PHYS 2211"],
    "BMED 3410": ["COE 2001", "MATH 2551"],
    "BMED 3520": ["BMED 3100", "BMED 2110", "MATH 2552", "CS 1371/CS 1301"],
    "BMED 3600": ["BMED 3100"],
    "BMED 3610": ["BMED 2310", "BMED 2400/ISyE 3770/CEE 3770", "BMED 3600"],
    "BMED 4000": ["BMED 1000", "BMED 2310"],
    "BMED 4602": ["BMED 2310", "BMED 3110"],

    "CHEM 1211K": [],
    "CHEM 1212K": ["CHEM 1211K"],
    "CHEM 2311": ["CHEM 1212K"],
    "CHEM 2312": ["CHEM 2311"],
    "CHEM 2380": ["CHEM 2312", "CHEM 2311", "CHEM 1212K"],
    "CHEM 3511/(4511 & 4512)": ["CHEM 2312"],

    "COE 2001": ["MATH 1552", "PHYS 2211"],
    "CS 1371/CS 1301": [],
    "ECE 3710": ["PHYS 2212"],
    "ECE 3741": ["ECE 3710"], 

    "Elective (Breadth) 1": [],
    
    "Elective (Depth) 1": [],
    "Elective (Depth) 2": [],
    "Elective (Depth) 3": [],


    "ENGL 1101": [], 
    "ENGL 1102": ["ENGL 1101"],

    "Humanities 1": [],
    "Humanities 2": [],

    "MATH 1551": [],
    "MATH 1552": ["MATH 1551"],
    "MATH 1553": ["MATH 1551"],
    "MATH 2551": ["MATH 1552", "MATH 1553"],
    "MATH 2552": ["MATH 1552", "MATH 1553"],
    "MSE 2001": ["CHEM 1211K"],
    "PHYS 2211": ["MATH 1552"],
    "PHYS 2212": ["PHYS 2211"],
    
    "Social Sciences 1": [],
    "Social Sciences 2": [],
    "Social Sciences 3": [],
    "U.S. Social Science": []
}; // Your prereq_chain JavaScript object here

let prereqChain = BMEprereqChain;

document.getElementById('checklistForm').addEventListener('change', function() {
    updateResult();
});

// Call updateResult on page load
window.addEventListener('load', function() {
    updateResult();
    // toggleLightTheme();
});

function updateResult() {
    var selectedItems = Array.from(document.querySelectorAll('input[name="items[]"]:checked'))
        .map(function (checkbox) {
            return checkbox.value;
        });

    const takeable = [];
    for (const course in prereqChain) {
        if (!selectedItems.includes(course)) {
            const prereqs = prereqChain[course];
            let canTake = true;
            for (const req of prereqs) {
                if (!selectedItems.includes(req)) {
                    canTake = false;
                    break;
                }
            }
            if (canTake) {
                takeable.push(course);
            }
        }
    }

    document.getElementById('result').innerText = takeable.join(', ');
}

function generateCheckboxes() {
    const form = document.getElementById('checklistForm');
    for (const course in prereqChain) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = course.replace(/\s/g, ''); // Replace spaces with empty string for id
        checkbox.name = 'items[]';
        checkbox.value = course;
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = course;

        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    }
}

function clearCheckboxes() {
    const form = document.getElementById('checklistForm');
    form.innerHTML = "";
}

// Call the function to generate checkboxes on page load
window.addEventListener('load', function() {
    generateCheckboxes();
    /*toggleLightTheme();*/
});

// JavaScript to toggle themes
function toggleLightTheme() {
    document.body.classList.toggle('light-theme');
}

function toggleHealthBME() {
    if (prereqChain == healthprereqChain) {
        prereqChain = BMEprereqChain;
    } else {
        prereqChain = healthprereqChain;
    }
    document.body.classList.toggle('BME-theme');
    clearCheckboxes();
    generateCheckboxes();
    updateResult();
}