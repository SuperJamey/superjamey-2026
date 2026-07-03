let count = localStorage.getItem('memorialViews') || 0;
count++;
localStorage.setItem('memorialViews', count);

document.getElementById('count').textContent = count;
