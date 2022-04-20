export const currentFormat = (tiemSpan:number):string =>{
    // 1、将时间戳，转成日期对象，拼接返回
    const date = new Date(tiemSpan)
    let str = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    return str;
}