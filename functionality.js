let previousImageUrl; 

document.getElementById('next').addEventListener('click', async () => {
try {
    const response = await fetch('https://api.waifu.pics/sfw/kill');
    const data = await response.json();
    previousImageUrl = document.getElementById('image').src; 
    document.getElementById('image').src = data.url;
    document.getElementById('image').style.display = 'block';
} catch (error) {
    console.error('Error fetching image for btn 1:', error);
}
});

document.getElementById('previous').addEventListener('click', () => {
if (previousImageUrl) {
    document.getElementById('image').src = previousImageUrl;
} else {
    console.warn('No previous image to display');
}
});