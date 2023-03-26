const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
	var html_head = [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>Bài tập IoT</title>',
            '</head>',
            '<body>',
                '<center>',
				'<h1>Bài tập IoT</h1>',
				'<table style="border:1px solid black;border-collapse:collapse;">',
					'<tr>',
						'<th style="border:1px solid black; width: 110px">MSHV</th>',
						'<th style="border:1px solid black; width: 150px">Họ tên</th>',
						'<th style="border:1px solid black; width: 100px">Địa chỉ</th>',
						'<th style="border:1px solid black; width: 400px">Photo</th>',
					'</tr>',
					'<tr>',
						'<td style="border:1px solid black;">M2522025</td>',
						'<td style="border:1px solid black;">Trương Minh Toàn</td>',
						'<td style="border:1px solid black;">Cà Mau</td>',
						'<td style="border:1px solid black;"><img width="400" src="https://www.dropbox.com/s/dmm1qd053luqou9/1.jpg?raw=1"></td>',
					'</tr>',
					'<tr>',
						'<td style="border:1px solid black;">M2522014</td>',
						'<td style="border:1px solid black;">Hồ Quốc Thảo</td>',
						'<td style="border:1px solid black;">Cần Thơ</td>',
						'<td style="border:1px solid black;"><img width="400" src="https://www.dropbox.com/s/q5gucws9q4u8xlr/2.jpg?raw=1"></td>',
					'</tr>',
					'<tr>',
						'<td style="border:1px solid black;">M2522022</td>',
						'<td style="border:1px solid black;">Phan Bùi Phương Nhi</td>',
						'<td style="border:1px solid black;">Cà Mau</td>',
						'<td style="border:1px solid black;"><img width="400" src="https://www.dropbox.com/s/koh0bbowg57u9ii/3.jpg?raw=1"></td>',
					'</tr>',
					'<tr>',
						'<td style="border:1px solid black;">M2522024</td>',
						'<td style="border:1px solid black;">Ngô Quang Thái</td>',
						'<td style="border:1px solid black;">Cà Mau</td>',
						'<td style="border:1px solid black;"><img width="400" src="https://www.dropbox.com/s/5enqa1tiqno6fgn/4.jpg?raw=1"></td>',
					'</tr>',
					'<tr>',
						'<td style="border:1px solid black;">M2522020</td>',
						'<td style="border:1px solid black;">Nguyễn Minh Hồng</td>',
						'<td style="border:1px solid black;">Cần Thơ</td>',
						'<td style="border:1px solid black;"><img width="400" src="https://www.dropbox.com/s/hsy1ed6x3diy3dx/5.jpg?raw=1"></td>',
					'</tr>',
					'</table>',
				'</center>',
            '</body>',
        '</html>'
    ].join('');
	var html_body = [
		
	].join('');
	res.statusCode = 200;
	res.writeHead(200, {
        'Content-Length': Buffer.byteLength(html_head, 'utf8'),
        'Content-Type': 'text/html; charset=utf-8'
    });
	res.write(html_head, 'utf8');
	res.end(html_body);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});