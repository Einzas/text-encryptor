
## A text encryption program

This program encrypts text using a simple substitution cipher. It is written in Javascript vanilla.

### How to use

1. Clone the repository
2. Open the index.html file in your browser
3. Enter the text you want to encrypt
4. Enter the key you want to use to encrypt the text
5. Click the encrypt button
6. Copy the encrypted text and send it to the person you want to read it
7. The person receiving the encrypted text should follow the same steps but instead of clicking the encrypt button, they should click the decrypt button

### How it works

The program takes the text you want to encrypt and the key you want to use to encrypt it. It then creates a new alphabet using the key. For example, if the key is `hello`, the new alphabet will be `heloabcdfgijkmnpqrstuvwxyz`. The program then replaces each letter in the text with the corresponding letter in the new alphabet. For example, if the text is `hello world`, the encrypted text will be `o8**>g0/>/.`. The program does the same thing in reverse when decrypting the text.

### Why it's not secure

This program is not secure because it uses a simple substitution cipher. This means that each letter in the text is replaced with the same letter in the new alphabet. This makes it easy to decrypt the text using frequency analysis. For example, if the encrypted text is `o8**>g0/>/.`, the most common letter in the text is `o`. This means that `o` is probably the letter `e` in the original text. The second most common letter in the text is `8`. This means that `8` is probably the letter `t` in the original text. The third most common letter in the text is `*`. This means that `*` is probably the letter `a` in the original text. And so on. This makes it easy to decrypt the text.

### How to make it more secure

This program can be made more secure by using a more complex cipher. For example, instead of using a simple substitution cipher, the program could use a polyalphabetic cipher. This means that each letter in the text is replaced with a different letter in the new alphabet. This makes it harder to decrypt the text using frequency analysis. For example, if the encrypted text is `o8**>g0/>/.`, the most common letter in the text is `o`. This means that `o` is probably the letter `e` in the original text. The second most common letter in the text is `8`. This means that `8` is probably the letter `t` in the original text. The third most common letter in the text is `*`. This means that `*` is probably the letter `a` in the original text. And so on. This makes it harder to decrypt the text.

### License

This program is licensed under the MIT license. See the [LICENSE](LICENSE) file for more information.


