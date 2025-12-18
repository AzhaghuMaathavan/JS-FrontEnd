let num = 153;
let n_str=String(num)
let count=n_str.length
let res =0
for(i=0;i<count;i++){
    res+=Number(n_str[i])**count
}
console.log(res==num)