document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for EPL teams
    const eplTeams = [
        'Arsenal', 'Chelsea', 'Manchester United', 'Liverpool', 'Manchester City', 'Tottenham Hotspur', 'Leicester City', 'Everton', 'West Ham United', 'Aston Villa'
    ];

    // Get the teamList element
    const teamList = document.getElementById('teamList');

    // Populate the teamList with EPL teams
    eplTeams.forEach(team => {
        const listItem = document.createElement('li');
        listItem.textContent = team;
        teamList.appendChild(listItem);
    });
});
