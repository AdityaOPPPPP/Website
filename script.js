// Copy Server IP to Clipboard
function copyToClipboard() {
    const serverIP = document.querySelector('.server-ip');
    const range = document.createRange();
    range.selectNode(serverIP);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Server IP copied to clipboard!');
}

// Open Popup
function openPopup() {
    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'block';
}

// Close Popup
function closePopup() {
    const popupModal = document.getElementById('popupModal');
    popupModal.style.display = 'none';
}

// Open Logout Popup
function openLogoutPopup() {
    const logoutPopup = document.getElementById('logoutPopup');
    logoutPopup.style.display = 'block';
}

// Close Logout Popup
function closeLogoutPopup() {
    const logoutPopup = document.getElementById('logoutPopup');
    logoutPopup.style.display = 'none';
}

// Logout
function logout() {
    closeLogoutPopup();
    alert('You have been logged out.');
}

// Open King Popup
function openKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'block';
}

// Close King Popup
function closeKingPopup() {
    const kingPopup = document.getElementById('kingPopup');
    kingPopup.style.display = 'none';
}

// Open VIP Popup
function openVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'block';
}

// Close VIP Popup
function closeVIPPopup() {
    const vipPopup = document.getElementById('vipPopup');
    vipPopup.style.display = 'none';
}

// Open Deadliest Popup
function openDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'block';
}

// Close Deadliest Popup
function closeDeadliestPopup() {
    const deadliestPopup = document.getElementById('deadliestPopup');
    deadliestPopup.style.display = 'none';
}

// Open OG Popup
function openOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'block';
}

// Close OG Popup
function closeOGPopup() {
    const ogPopup = document.getElementById('ogPopup');
    ogPopup.style.display = 'none';
}

// Add Event Listeners to "Click for more" Buttons
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const rankName = this.parentElement.querySelector('h3').innerText;
        if (rankName === 'King') {
            openKingPopup();
        } else if (rankName === 'VIP') {
            openVIPPopup();
        } else if (rankName === 'Deadliest') {
            openDeadliestPopup();
        } else if (rankName === 'OG') {
            openOGPopup();
        }
    });
});

// Close Modals When Clicking Outside
window.onclick = function(event) {
    const modals = [
        'popupModal',
        'loginPopup',
        'logoutPopup',
        'kingPopup',
        'vipPopup',
        'deadliestPopup',
        'ogPopup'
    ];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}