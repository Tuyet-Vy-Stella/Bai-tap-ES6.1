const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']; 

const renderButton = () => {
    for (let i = 0; i < colorList.length; i++){
        let color = colorList[i];
        let btn = document.createElement('button');
        btn.id = `btn-${color}`;
        btn.className = `color-button ${color}`;
        btn.style.backgroundColor = color;
        btn.onclick = function(){
            document.querySelector('house').style.color = color;
        }
        document.querySelector('#colorContainer').appendChild(btn);
    }
}

window.onload = function (){
    renderButton();
}