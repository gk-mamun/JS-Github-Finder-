class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <h3>${user.name}</h3>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                        <br>
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show user's Repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-danger">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // Show Alert
    showAlert(message, className) {
        // Clear existing alert
        this.clearAlert();
        // Create new div
        const div = document.createElement('div');
        // Add classes
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent container
        const container = document.querySelector('.searchContainer');
        // Get Search Box
        const search = document.querySelector('.search');
        // Place the alert inside div before search box
        container.insertBefore(div, search);

        // Timeout after 2.5s
        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    // Clear Alert Message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile if input is empty
    clearProfile() {
        this.profile.innerHTML = '';
    }
}