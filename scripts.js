
// everything is a function of this event listener that ensures the DOM content is loaded first. 
document.addEventListener("DOMContentLoaded", function () {
    let element1 = document.createElement('div');
    element1.className = "header-container";

// establishing that the div (with above features) is in the body.
    document.body.appendChild(element1);

// headers with content 
    let header = document.createElement('h1');
    header.className = "h1";
    let headerText = document.createTextNode('This is an h1');
    header.appendChild(headerText);
    element1.appendChild(header);

    let header2 = document.createElement('h2');
    header2.className = "h2";
    let header2Text = document.createTextNode('this is an h2');
    header2.appendChild(header2Text);
    element1.appendChild(header2);

    let header3 = document.createElement('h3');
    header3.className = "h3";
    let header3Text = document.createTextNode('This is an h3');
    header3.appendChild(header3Text);
    element1.appendChild(header3);

    let header4 = document.createElement('h4');
    header4.className = 'h4'
    let header4Text = document.createTextNode('This is an h4');
    header4.appendChild(header4Text);
    element1.appendChild(header4);

    let header5 = document.createElement('h5');
    header5.className = 'h5'
    let header5Text = document.createTextNode('This is an h5');
    header5.appendChild(header5Text);
    element1.appendChild(header5);

    let header6 = document.createElement('h6');
    header6.className = 'h6'
    let header6Text = document.createTextNode('This is an h6');
    header6.appendChild(header6Text);
    element1.appendChild(header6);

    const colorArray = ['red', 'pink', 'orange', 'yellow', 'green', 'purple', 'blue', 'gray'];

// listens for a double click and shifts h1's color randomly.
    header.addEventListener("dblclick", function () {
        header.style.color =
            colorArray[Math.floor(Math.random() * colorArray.length)];

    });

// button that produces list items.
    let button = document.createElement('button');
    let bttnText = document.createTextNode('Click to add new list item');
    button.className = "button";
    button.appendChild(bttnText);
    document.body.appendChild(button);

// listens for button click and produces said list items.
    var i = 1;
    button.addEventListener('click', function () {

        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item ' + i);
        li.appendChild(liText);
        document.body.appendChild(li);
        i++;

// listens for click on list items themselves and randomizes colors.
        li.addEventListener('click', function () {
            li.style.color = 
                colorArray[Math.floor(Math.random() * colorArray.length)];

// listens for double click on list items and removes list item. 
        li.addEventListener("dblclick", function() {
            li.remove()

        })
    });
        
    
    });


});
