import { get_pass_hash, generate_proof, verify_proof } from './wasm_imports';

const users = {};  // Simulated backend storage

export async function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const hashedPassword = get_pass_hash(password);
  users[username] = hashedPassword;
  alert('Registration successful!');
}

export async function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const proof = generate_proof(username, password);

  if (verify_proof(proof, users[username])) {
    alert('Login successful!');
  } else {
    alert('Login failed.');
  }
}
