# SRM GPA Calculator

## Overview
The SRM GPA Calculator is a web-based tool that allows students to calculate their Grade Point Average (GPA) based on their course grades and credit hours. The interface is simple, intuitive, and dynamically adapts to user input.

---

## Features
- Add and remove courses dynamically.
- Input course name, select grade, and assign credits.
- Calculates the GPA automatically based on the entered grades and credits.
- Clean, responsive user interface with real-time updates.

---

## Files
The project consists of the following files:

1. **index.html** - Contains the structure and layout of the GPA calculator.  
   - Displays a form where users can input course details.  
   - Shows the calculated GPA dynamically.

2. **styles.css** - Adds styling to the application for a clean and responsive design.  
   - Features a gradient background, modern button styles, and organized layout.

3. **script.js** - Provides the functionality for GPA calculation and dynamic course addition/removal.  
   - Calculates GPA based on grade points and credits.  
   - Supports user interaction, such as adding/removing courses.

---

## How to Use
1. Open the `index.html` file in a web browser.
2. Add courses using the **Add Course** button.
3. For each course, input the following:
   - **Course Name**
   - **Grade** (O, A+, A, B+, B, C, or F)
   - **Credits** (Positive integer value)
4. Click the **Calculate GPA** button to view the result.
5. The GPA will be displayed in the "Your GPA" section.

---

## GPA Calculation Logic
The GPA is calculated using the formula:

```
GPA = Total Points / Total Credits
```

Where:
- **Total Points** = Grade Points × Credits (summed for all courses)
- **Total Credits** = Sum of credits for all courses.

For example:
- **Grade**: `O (10 points)`, **Credits**: `3` → Points = `10 × 3 = 30`

---

## Grade Mapping
| Grade | Range      | Points |
|-------|------------|--------|
| O     | 91-100     | 10     |
| A+    | 81-90      | 9      |
| A     | 71-80      | 8      |
| B+    | 61-70      | 7      |
| B     | 56-60      | 6      |
| C     | 51-55      | 5      |
| F     | Below 50   | 0      |

---

## Technology Stack
- **HTML** for structure.
- **CSS** for styling.
- **JavaScript** for interactivity and GPA logic.

---https://github.com/naveenkm21

## Future Enhancements
- Save course data locally using browser storage.
- Add support for additional grading systems.
- Export GPA results as a PDF.

---

## Author
- **Your Name**  
- **Contact**: naveenkumarmohanarajan38@gmail.com
- **GitHub**: https://github.com/naveenkm21

---

## License
This project is open-source and free to use under the **MIT License**.

