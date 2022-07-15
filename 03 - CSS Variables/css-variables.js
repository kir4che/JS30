const inputs = document.querySelectorAll(".controls label input");

// 當使用者拉動更新元素時設定 CSS 變數值
function updateProperty() {
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function(input) {
    input.addEventListener("change", updateProperty);
    input.addEventListener('mousemove', updateProperty);
});
