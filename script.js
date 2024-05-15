const generateBtn = document.querySelector('#generateBtn')  // # : id 선택
const gridContainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {
    if (gridContainer.children.length >= 30){
        const confirmed = confirm("Your gallery is full. Would you like to delete the gallery?");
        if (confirmed) {
            gridContainer.innerHTML = "";  // 이미지 모두 삭제
        }
    }
    else{
    const randomNumber = Math.floor(Math.random()*1000) + 1
    const imgUrl = 'img src= https://picsum.photos/500?random=${randomNumber}'
    const img = document.createElement('img')
    img.src = imgUrl
    gridContainer.appendChild(img)}
})
