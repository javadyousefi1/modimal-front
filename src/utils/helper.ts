export function formatPrice(price: number): string {
  // Reverse the price string
  let reversedPrice = price.toString().split("").reverse().join("");

  // Insert spaces every three characters
  let spacedPrice = "";
  for (let i = 0; i < reversedPrice.length; i += 3) {
    spacedPrice += reversedPrice.slice(i, i + 3) + ",";
  }

  return spacedPrice.slice(0, -1);
}
