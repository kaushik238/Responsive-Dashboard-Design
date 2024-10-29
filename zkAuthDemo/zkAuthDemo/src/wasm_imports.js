import { get_pass_hash, generate_proof, verify_proof } from './pkg/zk_wasm.js';


// Initialize WASM
export async function initWasm() {
  await init();
}

export { get_pass_hash, generate_proof, verify_proof };
