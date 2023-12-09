prereq_chain = {"MATH 1552": ["MATH 1551"],
    "CS 1371": [],
    "PHYS 2211": ["MATH 1552"],
    "PHYS 2212": ["PHYS 2211"],
    "MATH 1551": [],
    "MATH 1553": ["MATH 1551"],
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
    "ECE 3741": ["ECE 3710"]
}

def courseVisualizer(coursework):
    takeable = []
    for course in prereq_chain.keys():
        if course not in coursework:
            prereqs = prereq_chain.get(course)
            canTake = True
            for req in prereqs:
                if req not in coursework:
                    canTake = False
            if (canTake):
                takeable.append(course)
    
    return takeable