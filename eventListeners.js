function addEventListenerCall() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
    addEventListenerCall();
  });
}
addEventListenerCall();
