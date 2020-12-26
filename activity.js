var connection = new Postmonger.Session()

connection.trigger('ready');
connection.on('initActivity',function(data){
  document.getElementByID('configuration').value = JSON.stringify(data,null,2);
});

connection.on('clickedNext',function(){
  var configuration = JSON.parse(document.getElementByID('configuration').value);
  connection.trigger('updateActivity',configuration);
});
