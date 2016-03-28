  var init = function(){
    console.log('app started');


  // *** array of quotes *********
          
  var quotes = [{author: "keith  ", text:" Are those hand-cut artisan crisps?, "},{author: "jay  ", text:"Visual Basic is the way forward, I don't know why we are doing JavaScript , "} ];

  var quoteList = document.getElementById("ql");
  var ul = document.createElement("ul");

  for(var i = 0; i < quotes.length; i++){
    console.log(quotes[i].text , quotes[i].author );
    
    console.log(ul, "creating a ul & appending to ul")
    var li = document.createElement("li");
    li.innerText = quotes[i].text +" "+quotes[i].author;
    var delLink = document.createElement("a");
    delLink.innerText = "delete";
    delLink.href = "";
    li.appendChild(delLink);
    ul.appendChild(li);
    delLink.onclick = function(event){
      event.preventDefault();
      li.remove();
     
    }

  }
  quoteList.appendChild(ul);
  console.log(quoteList);

  // *** user input ********
  var form = document.getElementById("quote-form");
  var input =  document.getElementById("quote-text-input");
  input.onkeyup = function(event){
    var copyText = document.getElementById("copy-text");
    copyText.innerText = input.value;
    
   }
  var handleClick = function(){
    console.log(input.value);

  
    var li = document.createElement("li");
    li.innerText = input.value;
    var delLink = document.createElement("a");
    delLink.innerText = "    delete";
    delLink.href = "";
    li.appendChild(delLink);
    ul.appendChild(li);
    delLink.onclick = function(event){
      event.preventDefault();
      li.remove();
     
    }

      // var quoteList = document.getElementById("ql");
      // quoteList.appendChild(ul);
      input.value = "";
      var copyText = document.getElementById("copy-text");
      copyText.innerText = input.value;
      console.log(quoteList);
    }

    var button = document.getElementById("add-button");
    var input =  document.getElementById("quote-text-input");

    // // q2 -  users can add quotes
    form.onsubmit = function(event){
      event.preventDefault();
      handleClick();
    }
  }

  window.onload = init;


