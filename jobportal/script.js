const sortBtns = document.querySelectorAll(".job-id > *");
const sorttiems = document.querySelectorAll(".jobs-container > *")

sortBtns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

    const targetdata = btn.getAttribute("data-target")
    sorttiems.forEach((item) => {
        item.classList.add("delete");
        if(item.getAttribute("data-item")=== targetdata || targetdata === "all")
        {
            item.classList.remove("delete");
        }
    })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const jobListings = document.querySelectorAll('.jobs-container .jList');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        jobListings.forEach(function(listing) {
            const jobTitle = listing.querySelector('h3').textContent.toLowerCase();
            
            if (jobTitle.includes(searchTerm)) {
                listing.style.display = '';
            } else {
                listing.style.display = 'none';
            }
        });
    });
});
