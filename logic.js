let input = document.getElementById('text')
let generate = document.getElementById('answer');
let answer = document.getElementById('final');

generate.addEventListener('click',function(){
    var selectValueFrom = document.getElementById('from').value;
    var selectValueTo = document.getElementById('to').value;
    var octal = [['0','0','0'],
    ['0','0','1'],
    ['0','1','0'],
    ['0','1','1'],
    ['1','0','0'],
    ['1','0','1'],
    ['1','1','0'],
    ['1','1','1'],
    ]
    var hexa = [['0','0','0','0'],
    ['0','0','0','1'],
    ['0','0','1','0'],
    ['0','0','1','1'],
    ['0','1','0','0'],
    ['0','1','0','1'],
    ['0','1','1','0'],
    ['0','1','1','1'],
    ['1','0','0','0'],
    ['1','0','0','1'],
    ['1','0','1','0'],
    ['1','0','1','1'],
    ['1','1','0','0'],
    ['1','1','0','1'],
    ['1','1','1','0'],
    ['1','1','1','1'],
    ]
    // For Equal
    if((selectValueFrom == 'binary' && selectValueTo == 'binary')||(selectValueFrom == 'decimal' && selectValueTo == 'decimal')||(selectValueFrom == 'octal' && selectValueTo == 'octal')||(selectValueFrom == 'hexadecimal' && selectValueTo == 'hexadecimal')){
        answer.value = text.value;
    }
    // For Binary to Decimal
    else if(selectValueFrom == 'binary' && selectValueTo == 'decimal'){
        let total=0;
        console.log(input.value.length);
        for(var i=0;i<input.value.length-1;i++){
            if(input.value[i] == '1'){
                let two = Math.pow(2,input.value.length-1-i);
                total = total + two;
                // console.log(two);
            }
            answer.value = total;
        }
    }
    // for Binary to Octal
    else if(selectValueFrom =='binary' && selectValueTo =='octal'){
        let total=0;let newinput;
        if(input.value.length % 3 == 1){
            let subinput = "00";
            newinput = subinput+input.value;
            // console.log("New String: "+newinput);
        }
        else if(input.value.length % 3 == 2){
            let subinput = "0";
            newinput = subinput+input.value;
            // console.log("New String: "+newinput);
        }
        else if(input.value.length % 3 == 0){
            newinput = input.value;
            // console.log("New String: "+newinput);
        }
        let octalString="";
        // console.log([input.value[0]],[input.value[1]],[input.value[2]]);
        for(var i=0;i<=newinput.length-2;i=i+3){
            // console.log([newinput[i],newinput[i+1],newinput[i+2]]);
            // console.log(octal[i]);
            let triplet = [newinput[i], newinput[i + 1], newinput[i + 2]].join('');
            for(var j=0;j<8;j=j+1){
                if(triplet == octal[j].join('')){
                octalString = octalString+j;
                }
                else{
                    // console.log(octal[j]);
                }
            }
            answer.value=octalString;
        }
    }
    // For Binary to Hexa
    else if(selectValueFrom =='binary' && selectValueTo =='hexadecimal'){
        let total=0;let newinput;
        if(input.value.length % 4 == 1){
            let subinput = "000";
            newinput = subinput+input.value;
            // console.log("New String: "+newinput);
        }
        else if(input.value.length % 4 == 2){
            let subinput = "00";
            newinput = subinput+input.value;
            // console.log("New String: "+newinput);
        }
        else if(input.value.length % 4 == 3){
            let subinput = "0";
            newinput = subinput+input.value;
            // console.log("New String: "+newinput);
        }
        else if(input.value.length % 4 == 0){
            newinput = input.value;
            // console.log("New String: "+newinput);
        }

        let hexaString="";
        // console.log([input.value[0]],[input.value[1]],[input.value[2]]);
        for(var i=0;i<=newinput.length-3;i=i+4){
            // console.log([newinput[i],newinput[i+1],newinput[i+2]]);
            // console.log(octal[i]);
            let triplet = [newinput[i], newinput[i + 1], newinput[i + 2], newinput[i + 3]].join('');
            for(var j=0;j<16;j=j+1){
                if(triplet == hexa[j].join('')){
                    if(j<=9){
                        hexaString = hexaString+j;
                    }
                    else if(j == 10){
                        hexaString = hexaString + "A";
                    }
                    else if(j == 11){
                        hexaString = hexaString + "B";
                    }
                    else if(j == 12){
                        hexaString = hexaString + "C";
                    }
                    else if(j == 13){
                        hexaString = hexaString + "D";
                    }
                    else if(j == 14){
                        hexaString = hexaString + "E";
                    }
                    else if(j == 15){
                        hexaString = hexaString + "F";
                    }
                }
            }
            answer.value=hexaString;
        }
    }
    // For Decimal to Binary
    else if(selectValueFrom == 'decimal' && selectValueTo == 'binary'){
        let temp="";var reminder;var origin=input.value;
        while(origin>0){
            reminder = origin %2;
            temp = reminder+temp;
            origin = Math.floor(origin/2);
            console.log(origin);
            console.log(temp);
        }
        answer.value = temp;
    }
    // For Decimal to Octal
    else if(selectValueFrom == 'decimal' && selectValueTo == 'octal'){
        let temp="";var reminder;var origin=input.value;
        while(origin>0){
            reminder = origin %8;
            temp = reminder+temp;
            origin = Math.floor(origin/8);
            console.log(origin);
            console.log(temp);
        }
        answer.value = temp;
    }
    // For Decimal to Hexa
    else if(selectValueFrom == 'decimal' && selectValueTo == 'hexadecimal'){
        let temp="";var reminder;var origin=input.value;
        while(origin>0){
            reminder = origin %16;
            if(reminder == 10){
                reminder = 'A';
            }
            else if(reminder == 11){
                reminder = 'B';
            }
            else if(reminder == 12){
                reminder = 'C';
            }
            else if(reminder == 13){
                reminder = 'D';
            }
            else if(reminder == 14){
                reminder = 'E';
            }
            else if(reminder == 15){
                reminder = 'E';
            }
            else if(reminder == 16){
                reminder = 'F';
            }
            temp = reminder+temp;
            origin = Math.floor(origin/16);
            console.log(origin);
            console.log(temp);
        }
        answer.value = temp;
    }
    // Octal to Binary
    else if(selectValueFrom == 'octal' && selectValueTo =='binary'){
        let split;let total="";let origin = input.value;
        for(var i=0;i<input.value.length;i++){
            split = octal[origin[i]].join('');
            total = total + split;
            }
            answer.value = total;
        }
        // Hexa to Binary
        else if(selectValueFrom == 'hexadecimal' && selectValueTo =='binary'){
            let split;let total="";let origin = input.value;
            for(var i=0;i<input.value.length;i++){
                if(origin[i]=='A'){
                    split = hexa[10].join('');
                }
                else if(origin[i]=='B'){
                    split = hexa[11].join('');
                }
                else if(origin[i]=='C'){
                    split = hexa[12].join('');
                }
                else if(origin[i]=='D'){
                    split = hexa[13].join('');
                }
                else if(origin[i]=='E'){
                    split = hexa[14].join('');
                }
                else if(origin[i]=='F'){
                    split = hexa[15].join('');
                }
                else{
                split = hexa[origin[i]].join('');
                }
                total = total + split;
            }
            answer.value = total;
        }
    // Octal to Decimal
    else if(selectValueFrom =='octal' && selectValueTo =='decimal'){
        let split;let total="";let origin = input.value;let mid="";
        for(var i=0;i<input.value.length;i++){
            split = octal[origin[i]].join('');
            total = total + split;
            }
            mid = total;
            let total1=0;
            for(var i=0;i<mid.length-1;i++){
                if(mid[i] == '1'){
                    let two = Math.pow(2,mid.length-1-i);
                    total1 = total1 + two;
                }
                answer.value = total1;
            }
        }
    // Octal to Hexadecimal
    else if(selectValueFrom =='octal' && selectValueTo =='hexadecimal'){
        let split;let total="";let origin = input.value;let mid="";
        for(var i=0;i<input.value.length;i++){
            split = octal[origin[i]].join('');
            total = total + split;
            }
            mid = total;
            let total1=0;let newinput;
            if(mid.length % 4 == 1){
                let subinput = "000";
                newinput = subinput+mid;
            }
            else if(mid.length % 4 == 2){
                let subinput = "00";
                newinput = subinput+mid;
            }
            else if(mid.length % 4 == 3){
                let subinput = "0";
                    newinput = subinput+mid;
                }
                else if(mid.length % 4 == 0){
                    newinput = input.value;
                }
        
                let hexaString="";
                for(var i=0;i<=newinput.length-3;i=i+4){
                    let triplet = [newinput[i], newinput[i + 1], newinput[i + 2], newinput[i + 3]].join('');
                    for(var j=0;j<16;j=j+1){
                        if(triplet == hexa[j].join('')){
                            if(j<=9){
                                hexaString = hexaString+j;
                            }
                            else if(j == 10){
                                hexaString = hexaString + "A";
                            }
                            else if(j == 11){
                                hexaString = hexaString + "B";
                            }
                            else if(j == 12){
                                hexaString = hexaString + "C";
                            }
                            else if(j == 13){
                                hexaString = hexaString + "D";
                            }
                            else if(j == 14){
                                hexaString = hexaString + "E";
                            }
                            else if(j == 15){
                                hexaString = hexaString + "F";
                            }
                        }
                    }
                    answer.value=hexaString;
                }
        }
    // Hexa to Decimal  
    else if(selectValueFrom == 'hexadecimal' && selectValueTo =='decimal'){
        let split;let total="";let origin = input.value;let mid="";
        for(var i=0;i<input.value.length;i++){
            if(origin[i]=='A'){
                split = hexa[10].join('');
            }
            else if(origin[i]=='B'){
                split = hexa[11].join('');
            }
            else if(origin[i]=='C'){
                split = hexa[12].join('');
            }
            else if(origin[i]=='D'){
                split = hexa[13].join('');
            }
            else if(origin[i]=='E'){
                split = hexa[14].join('');
            }
            else if(origin[i]=='F'){
                split = hexa[15].join('');
            }
            else{
            split = hexa[origin[i]].join('');
            }
            total = total + split;
        }
        mid = total;
        let total1=0;
        console.log(mid.length);
        for(var i=0;i<mid.length-1;i++){
            if(mid[i] == '1'){
                let two = Math.pow(2,mid.length-1-i);
                total1 = total1 + two;
            }
            answer.value = total1;
        }
    }
    // Hexa to Octal
    else if(selectValueFrom == 'hexadecimal' && selectValueTo =='octal'){
        let split;let total="";let origin = input.value;let mid="";
        for(var i=0;i<input.value.length;i++){
            if(origin[i]=='A'){
                split = hexa[10].join('');
            }
            else if(origin[i]=='B'){
                split = hexa[11].join('');
            }
            else if(origin[i]=='C'){
                split = hexa[12].join('');
            }
            else if(origin[i]=='D'){
                split = hexa[13].join('');
            }
            else if(origin[i]=='E'){
                split = hexa[14].join('');
            }
            else if(origin[i]=='F'){
                split = hexa[15].join('');
            }
            else{
            split = hexa[origin[i]].join('');
            }
            total = total + split;
        }
        mid = total;
        let total1=0;let newinput;
        if(mid.length % 3 == 1){
            let subinput = "00";
            newinput = subinput+mid;
        }
        else if(mid.length % 3 == 2){
            let subinput = "0";
            newinput = subinput+mid;
        }
        else if(mid.length % 3 == 0){
            newinput = mid;
        }
        let octalString="";
        for(var i=0;i<=newinput.length-2;i=i+3){
            let triplet = [newinput[i], newinput[i + 1], newinput[i + 2]].join('');
            for(var j=0;j<8;j=j+1){
                if(triplet == octal[j].join('')){
                octalString = octalString+j;
                }
            }
            answer.value=octalString;
        }
    }
})
