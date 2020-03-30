var doCoolStuff=function(){
	document.getElementById('cool').className='cool red';
}
var saymyname=function(name1){
	alert("my name is :"+ name1);
}
console.log('Hello there friends');
	var car = {
		make:'Hyundai',
		type:'i20',
		colour:'Red',
		isturnedon: false,
		noOfWheels: 4,
		seats :[
		 'seat1',
		 'seat2',
		 'seat3',
		 'seat4',
		 ],
          turnOn: function() {
     	this.isturnedon=true;
	     },
	     fly: function() {
	     	alert('car will fly');
	     },
	     switchCar: function (isOn) {
	     	console.log('turn car '+isOn)
	     	;
	     	if(isOn==true) {
	     		this.isturnedon = true;
	     	} else {
	     		this.isturnedon= false ;
	     	}
	     }

	};