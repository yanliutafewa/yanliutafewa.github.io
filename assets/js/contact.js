// for mobile menu
document.getElementById('mobile-menu-button').onclick = function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
};

// for enquiry form
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').classList.remove('hidden');
});