// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Flash message auto-hide functionality
document.addEventListener('turbo:load', function () {
    const flashMessage = document.querySelector('.flash');
    if (flashMessage) {
        setTimeout(function () {
            flashMessage.style.transition = 'opacity 0.5s ease-out';
            flashMessage.style.opacity = '0';
            setTimeout(function () {
                flashMessage.style.display = 'none';
            }, 500);
        }, 3000);
    }
});
