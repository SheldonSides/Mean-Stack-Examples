/**
 * New node file
 */
var fs =  require('fs');

var fruitBowl = ['apple', 'orange', 'banana','grapes'];

function writeFruit(fd)
{
	if(fruitBowl.length)
	{
		//var fruit = fruitBowl.pop() + "";
		
		for(i = 0; i < fruitBowl.length;i++ )
		{
			var fruit = fruitBowl.pop() + "";
			//console.log(fruitBowl[i]);		
		
			fs.write(fd, fruitBowl[i], null, null, function(err,bytes){
				if(err)
				{
					console.log("File Write failed");
				}
				else
				{
					console.log("wrote: %s %dbytes", fruit, bytes);
				}
			});		
		};
	}
	else
	{
		fs.close(fd);
	}
}

fs.open('fruit.txt','w', function(err,fd)
{
	writeFruit(fd)
});