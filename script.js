document.addEventListener('DOMContentLoaded', function() {
    var newElement = document.createElement('p');
    newElement.innerHTML = 'This is a new paragraph!';
    document.getElementById('container').appendChild(newElement);
});
