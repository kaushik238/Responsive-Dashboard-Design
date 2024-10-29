import { initWasm } from './wasm_imports';
import { register, login } from './auth';

// Initialize WASM on page load
window.addEventListener('load', async () => {
  await initWasm();
});

// Bind functions to window
window.register = register;
window.login = login;
