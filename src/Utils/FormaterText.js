export const formaterText = (value, resultValue) => {
    let newText = ''
    let cleaned = ('' + value).replace(/\G/g, '');
    for (let i = 0; i < value.length; i++) {
        if (i == 0) {
        newText = '+62 '
        }else if (i == 1 && i <= 6 ) {
        newText = newText + cleaned[1]
        }else if ( i <= 6 ) {
        newText = newText + '*'
        }else if ( i == 7 ) {
        newText = newText + ' - '
        }else if ( i < 12 ) {
        newText = newText + '*'
        }else if ( i == 12 ){
            newText = newText + '- 001'
        }
        newText = newText
    }
    return resultValue = newText
}

export const formaterEmail = (value, resultValue)=> {
    let newText = ''
    let cleaned = ('' + value).replace(/\G/g, '');
    let add
    for (let i = 0; i < value.length; i++){
        if (cleaned[i] == '@') {
        add = i
        }
    }
    for (let j = 0; j < value.length; j++) {
        if(j == 0 ){
            newText = cleaned[0]
        }else if(j < add){
            newText = newText + '*'
        }else if(j >= add){
            newText = newText + cleaned[j]
        }
        newText = newText
    }
    
    return resultValue = newText
}

export const limitString = (string, count) => {
    const result = string?.slice(0, count) + (string?.length > count ? '...' : '');
    return result;
};