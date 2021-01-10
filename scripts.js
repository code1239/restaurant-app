const inputName = document.getElementById('input-name')
const checkBtn = document.getElementById("check");
const orderBtn = document.getElementById("order");
const checkPopup = document.getElementById("check-popup");
const orderPopup = document.getElementById("order-popup");
const submitBtn = document.getElementById("submit");

console.log("updated 10.01.2021")
checkBtn.addEventListener("click",  (e) => {
  e.preventDefault()
    const tableNo = document.getElementById("input-table").value;
    checkPopup.classList.toggle("active")

    if (tableNo === "") console.log("please enter a number");
    else {
      // database.ref('/customers/' + tableNo).set({
      //    name: inputName.value,
      //   led:  0,
      //   led1:  1
      // })
    }
    setTimeout(() => {
            checkPopup.classList.toggle("active")
          }, 1300);
})
orderBtn.addEventListener("click",  (e) => {
   e.preventDefault()
    const tableNo = document.getElementById("input-table").value;
    orderPopup.classList.toggle("active")

    if (tableNo === "") console.log("please enter a number");
    else {
    //   database.ref('/customers/' + tableNo).set({
    //      name: inputName.value,
    //     led:  1,
    //     led1:  0
    //   })
    }
    setTimeout(() => {
            orderPopup.classList.toggle("active")
          }, 1300);
})

submitBtn.addEventListener ("click",  (e) => {
         e.preventDefault()
        const tableNo = document.getElementById("input-table").value;

      //  database.ref('/customers/' + tableNo).set({
      //    name: inputName.value,
      //   led:  0,
      //   led1:  0
      // })



      }
      )


