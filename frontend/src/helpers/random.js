export const randomIcon = () => {
    const icons = ['empire_logo.png', 'rebel_logo.png'];
    return icons[Math.floor(Math.random() * icons.length)];
}

export const randomImage = () => {
    const images = ['corvette.jpg', 'Star Destroyer 1.jpg'];
    return images[Math.floor(Math.random() * images.length)];
}