function getSentenceValue(str) {
	const strArray=str.split(" ")
  // console.log(strArray)
	let sum=0
	for(let i=0;i<strArray.length;i++)
	{
		let sumstr=0,cArray=strArray[i].split('')
    // console.log(cArray)
		for(let j=0;j<cArray.length;j++){
		if(/^[a-zA-Z]/.test(cArray[j].toLowerCase())){
			sumstr+=cArray[j].toLowerCase().charCodeAt()-96	
    //   console.log(sumstr)
    }
		}
		if(strArray[i]===strArray[i].toUpperCase())
		sumstr*=2
	sum+=sumstr
	}
// return sum
}
let str="dadu DADU"
console.log(getSentenceValue(str))