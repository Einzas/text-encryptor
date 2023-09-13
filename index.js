const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-$@#$%*()/:<>|+= ";

// Encrypts the given text with the given key
function encrypt(text, key) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const textIndex = alphabet.indexOf(text[i]);
    const keyIndex = alphabet.indexOf(key[i % key.length]);
    const encryptedIndex = (textIndex + keyIndex) % alphabet.length;
    encryptedText += alphabet[encryptedIndex];
  }
  return encryptedText;
}

// Decrypts the given text with the given key
function decrypt(text, key) {
  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const textIndex = alphabet.indexOf(text[i]);
    const keyIndex = alphabet.indexOf(key[i % key.length]);
    const decryptedIndex =
      (textIndex - keyIndex + alphabet.length) % alphabet.length;
    decryptedText += alphabet[decryptedIndex];
  }
  return decryptedText;
}

// Update the UI with the given text
function updateUI(isEncrypting) {
  const text = document.getElementById("message").value;
  const key = document.getElementById("key").value;
  const result = isEncrypting ? encrypt(text, key) : decrypt(text, key);
  document.getElementById("result").textContent = result;
}

// Encrypt the message when the encrypt button is clicked
document.getElementById("enc-btn").addEventListener("click", () => {
  updateUI(true);
});

// Decrypt the message when the decrypt button is clicked
document.getElementById("dec-btn").addEventListener("click", () => {
  updateUI(false);
});

// Initialize the UI
document.addEventListener("DOMContentLoaded", () => {
  updateUI(true);
});
