document.querySelector('.menu').addEventListener('click', (e) => {
    const c = e.target.className
    if (c.includes('close')) {
        document.querySelector('.burger').style.display = 'flex';
        document.querySelector('.links').style.display = 'none';
    } else if (c.includes('open')) {
        document.querySelector('.burger').style.display = 'none';
        document.querySelector('.links').style.display = 'flex';
    }
})