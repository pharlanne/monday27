  var init = function(){
    console.log('app started');


  // *** array of quotes *********
  var quotes = [{author: "keith", text:"smthing, "},{author: "jay", text:"smthing else, "} ];

  var quoteList = document.getElementById("ql");
  var ul = document.createElement("ul");

  for(var i = 0; i < quotes.length; i++){
    console.log(quotes[i].text , quotes[i].author );
    
    console.log(ul, "creating a ul & appending to ul")
    var li = document.createElement("li");
    li.innerText = quotes[i]. text +" "+quotes[i].author;

    ul.appendChild(li);

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

    ul.appendChild(li);

      // var quoteList = document.getElementById("ql");
      // quoteList.appendChild(ul);
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


