

   export  function formateDate(time) {//获取当前时间
                if (!time) return ""
                  
	var date = new Date(time);
        return date.getFullYear()+ '-'+(date.getMonth()+1)+ '-'+date.getDate()+ '-'+date.getHours()+ ':'+ date.getMinutes()+ ':'+date.getSeconds()

   }

