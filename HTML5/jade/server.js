var http = require('http')
var jade = require('jade')

http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	})

	//1.compile
	// var fn = jade.compile('div #{course}',{})
	// var html = fn({course:'jade'})


	//2.jade.render
	// var html = jade.render('div #{course}',{course:'jade render'})


	//3.jade.renderFile
	var html = jade.renderFile('index #{course}',{course:'jade renderFile'})




	resend(html)
}).listen(1337,'127.0.0.1')

console.log('Server running at 1337')