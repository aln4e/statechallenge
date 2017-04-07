var currentState = {
  availableGreetings: ["Bob", "Mary", "Carson"],
  availableAvatars: ["http://findicons.com/files/icons/1072/face_avatars/300/i05.png", "http://infinitelives.net/avatars/mangajen.jpg", "http://findicons.com/files/icons/1072/face_avatars/300/a05.png"],
  greetingIndex: 1}


  var currentState2 = {
    availableGreetings2: ["Mary", "Carson", "Bob"],
    greetingIndex2: 1}
var element = document.getElementById('greeting')
var element2 = document.getElementById('button')
var element3 = document.getElementById('avatar')

function nextGreet(){
  if( currentState.greetingIndex === 3){
    currentState.greetingIndex = 0}
    element.innerHTML = "Hello, " + currentState.availableGreetings[currentState.greetingIndex]
    element3.innerHTML = '<img src="' + currentState.availableAvatars[currentState.greetingIndex] + '"width=200px height=auto></img>'
    currentState.greetingIndex +=1
}

function nextButton(){
  if( currentState2.greetingIndex2 === 3){
    currentState2.greetingIndex2 = -0}
    element2.innerHTML = currentState2.availableGreetings2[currentState2.greetingIndex2]
    currentState2.greetingIndex2 +=1
}
