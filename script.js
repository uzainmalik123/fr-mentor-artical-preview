const hiddenShareContainer = document.querySelector('.hidden-share-container');
const figureContainer = document.querySelector('.figure');
const hiddenShareContainerShareButton = document.querySelector('.hidden-share-container-share-button');

const hideAndShowContainer = () => {
    if(window.innerWidth <= '825') {
        hiddenShareContainerShareButton.classList.remove('hidden')
        if(hiddenShareContainer.classList.contains('flex')) {
            hiddenShareContainer.classList.remove("flex");
            hiddenShareContainer.classList.add("hidden");
            figureContainer.classList.add("flex");
            figureContainer.classList.remove("hidden");
        }
        else {
            hiddenShareContainer.classList.remove('hidden');
            hiddenShareContainer.classList.add('flex');
            figureContainer.classList.remove("flex");
            figureContainer.classList.add("hidden");
        }
    }
    else if(window.innerWidth > '825') {
        hiddenShareContainerShareButton.classList.add('hidden')
            if(hiddenShareContainer.classList.contains('flex')) {
                hiddenShareContainer.classList.remove("flex");
                hiddenShareContainer.classList.add("hidden");
            }
            else {
                hiddenShareContainer.classList.remove('hidden');
                hiddenShareContainer.classList.add('flex');
            }
    }
}