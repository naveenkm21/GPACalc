// Add new course input fields dynamically
document.getElementById("add-course").addEventListener("click", () => {
    const courseList = document.getElementById("course-list");
    const courseHTML = `
        <div class="course">
            <input type="text" placeholder="Course Name" class="course-name" required>
            <select class="grade" required>
                <option value="">Grade</option>
                <option value="10">O (91-100)</option>
                <option value="9">A+ (81-90)</option>
                <option value="8">A (71-80)</option>
                <option value="7">B+ (61-70)</option>
                <option value="6">B (56-60)</option>
                <option value="5">C (51-55)</option>
                <option value="0">F (<50)</option>
            </select>
            <input type="number" placeholder="Credits" class="credits" min="1" required>
            <button type="button" class="remove-course">Remove</button>
        </div>
    `;
    courseList.insertAdjacentHTML("beforeend", courseHTML);
    attachRemoveHandlers();
});

// GPA calculation logic
document.getElementById("gpa-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let totalPoints = 0;
    let totalCredits = 0;

    const courses = document.querySelectorAll(".course");
    courses.forEach(course => {
        const grade = parseFloat(course.querySelector(".grade").value);
        const credits = parseInt(course.querySelector(".credits").value);

        if (!isNaN(grade) && !isNaN(credits)) {
            totalPoints += grade * credits;
            totalCredits += credits;
        }
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById("gpa").textContent = gpa;
});

// Attach remove functionality to dynamically added courses
function attachRemoveHandlers() {
    document.querySelectorAll(".remove-course").forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.remove();
        });
    });
}

// Attach remove functionality to initial course
attachRemoveHandlers();
