document.querySelector('#box1')
console.log(box1);

console.log(document.querySelector('#box2 .box2')); 
console.log(document.getElementById('box2').querySelector('.box2'));

//queryselectorall
console.log('querySelectorAll');

console.log(document.querySelectorAll('.box2'));
document.querySelectorAll('.box2').forEach((el,i) => {
    console.log(el,i );
    
});

http://127.0.0.1:5500/