document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.image-card');
    const counterElement = document.getElementById('image-counter');
    const totalLikesElement = document.getElementById('total-likes');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const likeButtons = document.querySelectorAll('.like-btn');

    let totalLikes = 0;

    function updateImageCount() {
        const visiblePhotos = Array.from(photos).filter(card => card.style.display !== 'none');
        if (counterElement) {
            counterElement.textContent = visiblePhotos.length;
        }
    }

    updateImageCount();

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            
            if (this.classList.contains('liked')) {
                totalLikes++;
                this.querySelector('i').classList.remove('far');
                this.querySelector('i').classList.add('fas');
            } else {
                totalLikes--;
                this.querySelector('i').classList.add('far');
                this.querySelector('i').classList.remove('fas');
            }

            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }
        });
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            photos.forEach(card => {
                const categories = card.getAttribute('data-category');
                const categoriesArray = categories.split(' ');
               
                if (filterValue === 'all' || categoriesArray.includes(filterValue)) {
                    card.style.display = 'flex';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });

            updateImageCount();
        });
    });

    console.log('Munity Script Updated: Counter is now dynamic!');
});