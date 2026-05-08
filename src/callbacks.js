// Callbacks

function login({ username, password, onSuccess, onError, onComplete }) {
  if (username === "admin" && password === "password") {
    const code = "123456";
    onSuccess(code);
  } else {
    const message = "Invalid username or password";
    onError(message);
  }
  onComplete();
}

login({
  username: "admin",
  password: "password",
  onSuccess: (code) => console.log(`The code is ${code}`),
  onError: (message) => console.log(message),
  onComplete: () => console.log("Login attempt completed"),
});
