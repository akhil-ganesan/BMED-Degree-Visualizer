// Include the JavaScript logic for courseVisualizer function here
const prereqChain = {
    "APPH 1040/1050/1060": [],
    "ENGL 1101": [], 
    "ENGL 1102": ["ENGL 1101"],
    "MATH 1552": ["MATH 1551"],
    "CS 1371": [],
    "Humanities 1": [],
    "Humanities 2": [],
    "PHYS 2211": ["MATH 1552"],
    "PHYS 2212": ["PHYS 2211"],
    "MATH 1551": [],
    "MATH 1553": ["MATH 1551"],
    "U.S. Social Science": [],
    "Social Sciences 1": [],
    "Social Sciences 2": [],
    "Social Sciences 3": [],
    "BMED 1000": [],
    "BMED 2110": ["CHEM 1211K", "MATH 1552", "BMED 1000"],
    "COE 2001": ["MATH 1552", "PHYS 2211"],
    "MATH 2551": ["MATH 1552", "MATH 1553"],
    "MATH 2552": ["MATH 1552", "MATH 1553"],
    "CHEM 1211K": [],
    "BMED 2250": ["BMED 2110"],
    "BMED 2310": ["BMED 2110", "BMED 2250", "PHYS 2211"],
    "BMED 3100": ["CHEM 1315"],
    "BMED 3110": ["BMED 3100", "BMED 2400", "BMED 3410", "CS 1371"],
    "BMED 3310": ["BMED 2110", "MATH 2551", "MATH 2552", "CS 1371", "PHYS 2211"],
    "BMED 3410": ["COE 2001", "MATH 2551"],
    "BMED 3520": ["BMED 3100", "BMED 2110", "MATH 2552", "CS 1371"],
    "BMED 3600": ["BMED 3100"],
    "BMED 3610": ["BMED 2310", "BMED 2400", "BMED 3600"],
    "BMED 4000": ["BMED 1000", "BMED 2310"],
    "BMED 4602": ["BMED 2310", "BMED 3110"],
    "CHEM 1315": ["CHEM 1211K"],
    "BMED 2400": ["MATH 1552", "CS 1371"],  
    "MSE 2001": ["CHEM 1211K"],
    "ECE 3710": ["PHYS 2212"],
    "ECE 3741": ["ECE 3710"], 
    "Depth Electives": [],
    "Breadth Electives": []
}; // Your prereq_chain JavaScript object here


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

// Call the function to generate checkboxes on page load
window.addEventListener('load', function() {
    generateCheckboxes();
    /*toggleLightTheme();*/
});

// JavaScript to toggle themes
function toggleLightTheme() {
    document.body.classList.toggle('light-theme');
}