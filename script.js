const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  //create a result array
	let result = [];
	let chunkArray = [];
	let chunkSum = 0; 

	//start travering the array
	for(let i=0; i<arr.length; i++){
		if(chunkSum + arr[i] <= n){
			chunkArray.push(arr[i]);
			chunkSum = chunkSum + arr[i];
		}else{
			result.push(chunkArray);
			chunkArray = [arr[i]];
			chunkSum = arr[i]; 
		}
	}

	result.push(chunkArray);
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
