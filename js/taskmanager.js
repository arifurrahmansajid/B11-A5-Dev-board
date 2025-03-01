document.addEventListener("DOMContentLoaded", function () {
    const taskAssignedElement = document.getElementById("task-assigned");
    const taskCountElement = document.getElementById("task-count");
    const activityLogElement = document.getElementById("activity-log");
    const clearHistoryButton = document.getElementById("clear-history");
    const themeButton = document.getElementById("theme-btn");
    const colors = ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f"]; // Custom hexadecimal colors
    let colorIndex = 0;

    themeButton.addEventListener("click", function () {
        document.getElementById("dashboard").style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });

    const completeTaskButtons = document.querySelectorAll(".complete-task");

    completeTaskButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Change button color
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");
        button.textContent = "Completed";
        button.disabled = true; // Disable the button after marking as completed

        // Decrease task assigned number
        let taskAssigned = parseInt(taskAssignedElement.textContent);
        taskAssignedElement.textContent = taskAssigned - 1;

        // Increase task count
        let taskCount = parseInt(taskCountElement.textContent);
        taskCountElement.textContent = taskCount + 1;

        // Show alert
        alert("Board updated successfully");

        // Log activity
        const taskTitle = button.closest(".card-body").querySelector("h2").textContent;
        const currentTime = new Date().toLocaleTimeString();
        const logEntry = document.createElement("p");
        logEntry.textContent = `You have completed the task "${taskTitle}" at ${currentTime}`;
        logEntry.style.border = "1px solid #ccc"; // Add border
        logEntry.style.padding = "10px"; // Add padding
        logEntry.style.marginTop = "10px"; // Add gap
        activityLogElement.appendChild(logEntry); // Append log entry to the activity log

        // Check if all tasks are completed
        const remainingTasks = document.querySelectorAll(".complete-task:not(.btn-success)").length;
        if (remainingTasks === 0) {
          alert("Congratulations! You have finished all the tasks.");
        }
      });
    });

    clearHistoryButton.addEventListener("click", function () {
      activityLogElement.innerHTML = "";
    });
  });