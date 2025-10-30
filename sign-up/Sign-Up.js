const SUPABASE_URL = "https://yuppojdiwoxipbxprhdg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cHBvamRpd294aXBieHByaGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDc2NjgsImV4cCI6MjA3NzMyMzY2OH0.WZOVWaNexQMPK1ZFfMabM7xgWMaB-s0lKJ7GQjkFEK8";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function ChangePasswordVisibility() {
    let signUpPassword = document.getElementById("signUpPassword");
    let signUpPasswordConfirm = document.getElementById("signUpPasswordConfirm");
    let passwordEyeImg = document.getElementById("passwordEyeImg");

    if (signUpPassword.type == "password") {
        signUpPassword.type = "text";
        signUpPasswordConfirm.type = "text";
        passwordEyeImg.src = "/assets/icons/Visibility On.svg";
    }

    else if (signUpPassword.type == "text") {
        signUpPassword.type = "password";
        signUpPasswordConfirm.type = "password";
        passwordEyeImg.src = "/assets/icons/Visibility Off.svg";
    }
}

async function signUp(event) {
    let signUpForm = document.getElementById("signUpForm");
    let signUpName = document.getElementById("signUpName");
    let signUpEmail = document.getElementById("signUpEmail")
    let signUpPassword = document.getElementById("signUpPassword");
    let signUpPasswordConfirm = document.getElementById("signUpPasswordConfirm");
    let output = document.getElementById("output");
    let emailConfirm = document.getElementById("emailConfirm");
    let emailConfirmSubtitle = document.getElementById("emailConfirmSubtitle");

    if (signUpPassword.value != signUpPasswordConfirm.value) {
        output.textContent = "Passwords do not match.";
        event.preventDefault();
        return;
    }

    output.textContent = "";

    const {error} = await supabase.auth.signUp({email: signUpEmail.value, password: signUpPassword.value});

    if (error) {
        output.textContent = error.message;
        alert(error.message)
        event.preventDefault();
        return;
    }

    await supabase
        .from("users")
        .insert([{id: user.id, email: user.email, profile: {name: signUpName.value}}]);

    signUpForm.style.display = "none";
    emailConfirm.style.display = "";
    emailConfirmSubtitle.innerHTML = `We have sent a verification link to <b>${signUpEmail.value}</b>`;

    event.preventDefault();
    return;
}