// scripts.js

function searchScholarships() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const scholarships = document.querySelectorAll('#scholarship-list li');
    
    scholarships.forEach(scholarship => {
        const scholarshipName = scholarship.querySelector('h3').textContent.toLowerCase();
        if (scholarshipName.includes(searchInput)) {
            scholarship.style.display = '';
        } else {
            scholarship.style.display = 'none';
        }
    });
}
