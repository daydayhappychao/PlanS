let request =require('request')
let fs = require('fs');

let juan = 1
let page = 1
let url = `http://img.feiwan.net/conan/manhua/`
let url2 = `http://img.feiwan.net/conan/manhua/${juan}/${page}.jpg`

function runScrapy(startUrl) {
	console.log(`图片地址为${startUrl}`)
	request(startUrl,function(error,res,body){
		if(res.statusCode!='404'){
			request(startUrl).pipe(fs.createWriteStream(`./${juan}/${page}.jpg`));
			page++
		}else{
			juan++
			page = 1
		}
		console.log(juan)
		console.log(page)
		console.log(url)
		runScrapy(url+juan+'juan/'+page+'.jpg')
	})
}

runScrapy(url)

