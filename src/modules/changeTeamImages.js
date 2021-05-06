const changeTeamImages = () => {

    const command = document.getElementById('command');

    const changeImage = event => {
        const target = event.target;
        const image = target.closest('.command__photo');

        if (image) {
            const newSrc = image.dataset.img;
            image.dataset.img = image.src;
            image.src = newSrc;
        }
    };

    command.addEventListener('mouseover', changeImage);
    command.addEventListener('mouseout', changeImage);

};

export default changeTeamImages;