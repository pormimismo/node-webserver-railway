const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Disposition', 'attactment; filename=list.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });
  
  res.write('id, name\n');
  res.write('1, Jorge\n');
  res.write('2, Martha\n');
  res.write('3, Mario\n');
  res.write('4, Juan\n');
  res.end();
})
.listen( 8080 );

console.log('Listening on port ', 8080);