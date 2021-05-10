document.querySelector('.burger-menu').addEventListener('click', (e) => {
    const line1 = document.querySelector('.line1');
    const navigation = document.querySelector('.navigation')
    if (e.target.className.includes('burger') && !e.target.className.includes('active')) {
        e.target.className += ' active'
        navigation.className += ' navact'
        line1.style.display = 'none'
        return
    }
    if (e.target.className.includes('active')) {
        e.target.className = 'burger-menu'
        navigation.className = 'navigation'
        line1.style.display = ''
    }
})