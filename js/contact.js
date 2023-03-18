export class Contact {
  constructor() {}

  check() {
    $("#nameInput").keyup(function (e) {
      console.log("hello");

      let regex = /^[a-zA-Z]/;
      let str = this.value;
      if (!regex.test(str)) {
        $("#nameAlert").removeClass("d-none");
      } else {
        $("#nameAlert").addClass("d-none");
      }
    });

    $("#emailInput").keyup(() => {
      let emailHelp = $("#emailAlert");
      let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
      let str = this.value;
      if (!regex.test(str)) {
        emailHelp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" id="lockSvg" fill="currentColor" class="bi bi-lock-fill me-1 mb-1" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>We'll <span>never</span> share your email with anyone else.</div>`;
      } else {
      }
    });

    $("#phoneInput").keyup(() => {
      let regex = /^([0-9]){10}$/;
      let str = this.value;
      if (!regex.test(str)) {
        $("#phoneAlert").removeClass("d-none");
      } else {
        $("#phoneAlert").addClass("d-none");
      }
    });
    $("#ageInput").keyup(() => {
      let regex = /^([0-9]{2})/;
      let str = this.value;
      if (!regex.test(str)) {
        $("#ageAlert").removeClass("d-none");
      } else {
        $("#ageAlert").addClass("d-none");
      }
    });
    $("#passwordInput").keyup(() => {
      let regex = /[a-zA-Z0-9]{8,16}/;
      let str = this.value;
      if (!regex.test(str)) {
        $("#passwordAlert").removeClass("d-none");
      } else {
        $("#passwordAlert").addClass("d-none");
      }
    });
    $("#repasswordInput").keyup(() => {
      let regex = $("#passwordInput").value ;
      let str = this.value;
      if (str!=regex) {
        $("#repasswordAlert").removeClass("d-none");
      } else {
        $("#repasswordAlert").addClass("d-none");
      }
    });
  }
}
