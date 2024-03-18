// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"
import "jquery"

document.addEventListener('turbolinks:load', function() {
    // Add event listener for the read/unread button
    document.querySelectorAll('.toggle-read-button').forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        var url = this.getAttribute('data-url'); // Get the URL from the button's data attribute
        var isRead = this.getAttribute('data-is-read'); // Get the current read state from the button's data attribute
  
        // Perform an AJAX request to update the read state
        fetch(url, {
          method: 'PATCH', // Use PATCH method to update the resource
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          },
          body: JSON.stringify({ read: !JSON.parse(isRead) }) // Toggle the read state
        }).then(function(response) {
          // Check if the request was successful
          if (response.ok) {
            // Toggle the button text and data attribute
            var newText = JSON.parse(isRead) ? 'Unread' : 'Read';
            button.textContent = newText;
            button.setAttribute('data-is-read', JSON.stringify(!JSON.parse(isRead)));
          } else {
            console.error('Error updating read state');
          }
        }).catch(function(error) {
          console.error('Request failed:', error);
        });
      });
    });
  });
  