// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Add Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userName = e.target.value;

    if (userName != '') {
        // Make http request
        github.getUser(userName)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile div
        ui.clearProfile();
    }
});