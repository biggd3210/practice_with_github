const submission = document.querySelector("#submission");
const memeList = document.querySelector('#meme-list');
const formSubmit = document.querySelector('#new-meme');
const darkMode = document.querySelector('#darkText');
const darkCheck = document.querySelector('#dark');
const darkRecall = JSON.parse(localStorage.getItem('dark'));

//setting dark mode for user convenience.
if (darkRecall == true) {
    darkMode.classList.add('dark')
    document.body.style.backgroundColor = "#3f3c65bd";
    darkCheck.checked = true;
}
darkMode.addEventListener('click', function(e) {
    if (!e.target.classList.contains('dark')) {
    e.target.classList.add('dark');
    document.body.style.backgroundColor = '#3f3c65bd';
    localStorage.setItem('dark', 'true');
    darkCheck.checked = true;
    } else {
        e.target.classList.remove('dark')
        document.body.style.backgroundColor = "#aaa0fa";
        localStorage.removeItem('dark');
        darkCheck.checked = false;
    }
})


formSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    //following takes info from form submission
    const newImg = document.querySelector('#imageLink');
    const lowerTxt = document.querySelector('#lowerText');
    const upperTxt = document.querySelector('#upperText');
    const textColor = document.querySelector('#textColor');
    
        
    //following sections appends new meme to document div
    
    // this is a family div that will house all elements of the new meme
    const newDiv = document.createElement('div');
    newDiv.classList.add('completedMeme');

    //create div and child elements to contain image:
    const imgDiv = document.createElement('div');
    const memeBase = document.createElement('img');
    memeBase.setAttribute('src', newImg.value);

    //collect, contain, and color text elements:
    const upperDiv = document.createElement('div');
    upperDiv.classList.add('upperValue');
    const upperPTag = document.createElement('p');
    upperPTag.innerText = upperTxt.value;
    upperPTag.style.color = textColor.value;
    const lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lowerValue');
    const lowerPTag = document.createElement('p');
    lowerPTag.innerText = lowerTxt.value;
    lowerPTag.style.color = textColor.value;
    upperDiv.appendChild(upperPTag);
    lowerDiv.appendChild(lowerPTag);

   

    //div and child elements to create delete button
    const btnDiv = document.createElement('div');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('deleteFunction');

    //assemble all meme div elements together:
    newDiv.appendChild(memeBase);
    newDiv.appendChild(upperDiv);
    newDiv.appendChild(lowerDiv);
    newDiv.appendChild(btnDiv);
    //imgDiv.appendChild(memeBase);
    btnDiv.appendChild(deleteBtn);
    memeList.appendChild(newDiv);
    

    //resets form values to placeholders
    newImg.value = '';
    lowerTxt.value = '';
    upperTxt.value = '';
})

//delete meme function
document.addEventListener('click', function(e) {
    var element = e.target;
    if (element.tagName == 'BUTTON' && element.classList.contains("deleteFunction")) {
        element.parentElement.parentElement.remove();
    }
})

//If I wasn't so excited to move on to new topics and projects, I would spend more time on this project and work on some of the spacing and list format for the list div. I might even come back to beef it up as I find more free time and techniques. But if I had more time to flesh this iteration of the project out, I wanted to have the newly created memes space out into two columns instead of one column. Just to display more at one time. But overall, this project was fun and it went well. A few hiccups here and there, but things that seemed like a normal problem I would run into and I was able to overcome them. Which was good for my confidence. 