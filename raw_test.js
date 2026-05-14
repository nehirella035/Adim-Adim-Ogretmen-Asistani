import fs from 'fs';

const env = fs.readFileSync('.env', 'utf8');
const key = env.match(/VITE_GEMINI_API_KEY=(.*)/)[1].trim();

console.log("Testing Key:", key.substring(0, 5) + "..." + key.substring(key.length - 5));

async function test() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: "hi" }] }] })
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

test();
