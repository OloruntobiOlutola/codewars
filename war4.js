function digPow(n, p) {
  let sum = 0;
  const num = Array.from(String(n), Number);
  for (let i = 0; i < num.length; i++) {
    sum += num[i] ** (p + i);
  }
  if (sum % n === 0) return sum / n;
  return -1;
}
