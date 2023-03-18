export class Contact {
  constructor() {
    this.username = $("#username");
    this.email = $("#email");
    this.phone = $("#phone");
     this.validUsername = false;
     this.validEmail = false;
     this.validPhone = false;
     this.submit = $("#submit");

  }

  check() {
    
    
    this.username.addEventListener("keyup", () => {
      let regex = /^[a-zA-Z]/;
      let str = this.username.value;
      if (regex.test(str)) {
        $("#usernamevalid").removeClass("d-none");
      } else {
        $("#usernamevalid").addClass("d-none");
      }
    });
    this.email.keyup( () => {
      let emailHelp = $("#emailHelp");
      let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
      let str = thisemail.value;
      if (regex.test(str)) {
        emailHelp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" id="lockSvg" fill="currentColor" class="bi bi-lock-fill me-1 mb-1" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
      </svg>We'll <span>never</span> share your email with anyone else.</div>`;
      } else {
      }
    });
    this.phone.keyup(() => {
      let regex = /^([0-9]){10}$/;
      let str = phone.value;
      if (regex.test(str)) {
      } else {
      }
    });
    this.submit.click((e) => {
      e.preventDefault();
      if (validEmail && validUsername && validPhone) {
      } else {
      }
    });
  }
}
