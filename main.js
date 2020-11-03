const alertText = document.getElementById('alertText');
const input = document.querySelector('.input');
const clickBtn = document.querySelector('.clickBtn');


clickBtn.onclick = () =>{
    if(input.value === ''){
        alertText.textContent = ' メッセージを入力してください';
    }else{
        alertText.textContent = '';
        const info = getTime();
        elementAnimaFlag(info); 
        clickBtn.disabled = true;     
    }
}

function getTime(){
    const now = new Date;
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const info = year + '年'+ month +'月' + date + '日 ' + hour + ':' +  min + ':' + sec;
    return info;
}

function elementAnimaFlag(info){
    //先に全取得して、下げる命令を出す。
    const array1 = document.querySelectorAll('.addText');

    if(array1.length === 0){
        addElement(info);
        setTimeout(() => {
            textClear();
        }, 500);
    }else{
        array1.forEach((value,index) => {
            value.classList.remove('addEvent');
            value.classList.add('listDown');

            setTimeout(function(){
                value.classList.remove('listDown');
                if(index === array1.length - 1){
                    addElement(info);
                    textClear();
                }
            },500);
        })
    }
}

function addElement(info){
    //アニメーションが終了したら、downクラスをremove
    const textBox = document.querySelector('.addTextBox');
    const p1 = document.createElement('p');
    const span1 = document.createElement('span');
    
    p1.classList.add('addEvent', 'addText');
    span1.classList.add('dayInfo');
    
    const inputText = input.value;
    p1.innerHTML = inputText;
    span1.innerHTML = info;
    
    textBox.prepend(p1);
    p1.appendChild(span1);

    for(let i =0; i < 5; i++){
        const block = document.createElement('span');
        block.classList.add('block');
        p1.appendChild(block);
    }
}

function textClear(){
    clickBtn.disabled = false;
    input.value ="";
}