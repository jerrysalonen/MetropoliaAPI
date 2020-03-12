
const sorting = (list,word) =>{
        
        return list.sort((a,b) => {
                if(a.title.toLowerCase().includes(word.toLowerCase())){
                        return -1;
                }else if(b.title.toLowerCase().includes(word.toLowerCase())){
                        return 1;
                }else{

                        if(a.text.toLowerCase().includes(word.toLowerCase())){
                                return -1
                        }else if(b.text.toLowerCase().includes(word.toLowerCase())){
                                return 1;
                        }else{
                                return 0;
                        }
                        
                        
                }
        } 
)}

export default sorting

/*
                        var temp1 = a.text;
                        var ra = new RegExp(temp1, 'g');
                        var count1 = (temp1.match(ra) || []).length;
                        console.log(count)
                        var temp2 = b.text;
                        var rb = new RegExp(temp2, 'g');
                        var count2 = (temp2.match(rb) || []).length;

                        if(b > a){
                                return 0
                        }else if(a > b){
                                return -1;
                        }else{
                                return 1;
                        }
*/