function tabuada(){
        let txtnum = document.querySelector(`input#numeroselect`)
        let tabuadaarea = document.querySelector(`select#seltab`)

          if(txtnum.value.length == 0){
            alert('[ERRO] Por favor, digite um número!')
        }  else {
               let num = Number(txtnum.value)
               tabuadaarea.innerHTML = ''
               
               for(let c = 1; c <= 10; c++){
                    let item = document.createElement('option')
                    item.text = `${num} x ${c} = ${num*c}`
                    item.value = `tabuadaarea${c}`
                    tabuadaarea.appendChild(item)
            }
        }
}