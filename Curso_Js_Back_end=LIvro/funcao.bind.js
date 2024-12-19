function sith(){
    console.log(this);
}
sith()
//com .bind
var lordsith= sith.bind({nome:'darth bane'}) 
undefined
