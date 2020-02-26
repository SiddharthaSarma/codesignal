columnTitle = f = n => n-- ? f(n / 26 | 0) + String.fromCharCode([n % 26 + 65]) : ""
